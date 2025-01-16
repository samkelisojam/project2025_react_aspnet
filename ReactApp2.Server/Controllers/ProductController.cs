using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ReactApp2.Server.Data;
using ReactApp2.Server.Models;

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
        [HttpGet]
        public async Task<IActionResult> Products()
        {


            return Ok(await _context.products.AsNoTracking().ToListAsync());
        }
        [HttpPost]
        public async Task<IActionResult> CreateProducts(Product product)
        {


            if (product is null)
            {
                return BadRequest();

            }
            await _context.products.AddAsync(product);
            await _context.SaveChangesAsync();
            return Ok(product);


        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetProducts(int id)
        {

            var product = await _context.products.FindAsync(id);
            if (product is null)
            {
                return NotFound();

            }

            return Ok(product);

        }
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




    }
}
