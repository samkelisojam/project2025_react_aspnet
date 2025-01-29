using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using ReactApp2.Server.Models;

namespace ReactApp2.Server.Data
{



    public static class SeedData
    {
        public static void EnsureEntityPopulated(IApplicationBuilder app)
        {
            AppDbContext context = app.ApplicationServices
                .CreateScope().ServiceProvider.GetRequiredService<AppDbContext>();

            if (context.Database.GetPendingMigrations().Any())
            {
                context.Database.Migrate();
            }

            if (!context.products.Any())
            {
                context.products.AddRange(
                            new Product
                            {
                                Name = "Summer jacket assembly",
                                Description =
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                                Price = 20000,
                                PictureUrl = "/images/Image(3).png",
                                Brand = "Assemnly",
                                Type = "Boards",
                                QuantityInStock = 100
                            },
                new Product
                {
                    Name = "Assembly Trousers",
                    Description = "Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.",
                    Price = 15000,
                    PictureUrl = "/images/Image1.png",
                    Brand = "Assemnly",
                    Type = "Boards",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Assembly T-shirt",
                    Description =
                        "Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.",
                    Price = 18000,
                    PictureUrl = "/images/Image21.png",
                    Brand = "Assemnly",
                    Type = "Boards",
                    QuantityInStock = 100
                }




                    );
            }
            context.SaveChanges();
        }
    }


}
