using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ReactApp2.Server.Data;
using ReactApp2.Server.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactApp2.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ProductController(AppDbContext context)
        {
            _context = context;
        }

        // Get all products
        [HttpGet]
        public async Task<IActionResult> Products()
        {
            var products = await _context.products.AsNoTracking().ToListAsync();
            return Ok(products);
        }

        // Create a new product
        [HttpPost]
        public async Task<IActionResult> CreateProducts(Product product)
        {
            if (product == null)
            {
                return BadRequest();
            }

            await _context.products.AddAsync(product);
            await _context.SaveChangesAsync();
            return Ok(product);
        }

        // Get a product by ID
        [HttpGet("{id}")]
        public async Task<IActionResult> GetProducts(int id)
        {
            var product = await _context.products.FindAsync(id);
            if (product == null)
            {
                return NotFound();
            }

            return Ok(product);
        }

        // Update a product by ID
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProducts(int id, Product product)
        {
            var existingProduct = await _context.products.FindAsync(id);
            if (existingProduct == null)
            {
                return NotFound();
            }

            if (id != product.Id)
            {
                return BadRequest();
            }

            _context.Entry(product).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.products.Any(p => p.Id == id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // Delete a product by ID
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            var product = await _context.products.FindAsync(id);
            if (product == null)
            {
                return NotFound();
            }

            _context.products.Remove(product);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // Get products by brand
        [HttpGet("brand/{brand}")]
        public async Task<IActionResult> GetProductsByBrand(string brand)
        {
            var products = await _context.products
                                         .Where(p => p.Brand == brand)
                                         .AsNoTracking()
                                         .ToListAsync();
            if (!products.Any())
            {
                return NotFound();
            }
            return Ok(products);
        }

        // Bulk create products
        [HttpPost("bulk")]
        public async Task<IActionResult> CreateProductsBulk(IEnumerable<Product> products)
        {
            if (products == null || !products.Any())
            {
                return BadRequest();
            }

            await _context.products.AddRangeAsync(products);
            await _context.SaveChangesAsync();
            return Ok(products);
        }

        // Get bubble sorted products by a specified property
        [HttpGet("bubblesort")]
        public async Task<IActionResult> GetBubbleSortedProducts(string sortBy = "Name", bool ascending = true)
        {
            var products = await _context.products.AsNoTracking().ToListAsync();
            BubbleSort(products, sortBy, ascending);
            return Ok(products);
        }

        private void BubbleSort(List<Product> products, string sortBy, bool ascending)
        {
            int n = products.Count;
            for (int i = 0; i < n - 1; i++)
            {
                for (int j = 0; j < n - i - 1; j++)
                {
                    bool condition = false;
                    switch (sortBy.ToLower())
                    {
                        case "name":
                            condition = ascending ? string.Compare(products[j].Name, products[j + 1].Name) > 0
                                                  : string.Compare(products[j].Name, products[j + 1].Name) < 0;
                            break;
                        case "price":
                            condition = ascending ? products[j].Price > products[j + 1].Price
                                                  : products[j + 1].Price > products[j].Price;
                            break;
                        case "quantityinstock":
                            condition = ascending ? products[j].QuantityInStock > products[j + 1].QuantityInStock
                                                  : products[j + 1].QuantityInStock > products[j].QuantityInStock;
                            break;
                        case "brand":
                            condition = ascending ? string.Compare(products[j].Brand, products[j + 1].Brand) > 0
                                                  : string.Compare(products[j].Brand, products[j + 1].Brand) < 0;
                            break;
                        default:
                            break;
                    }

                    if (condition)
                    {
                        var temp = products[j];
                        products[j] = products[j + 1];
                        products[j + 1] = temp;
                    }
                }
            }
        }
    }
}