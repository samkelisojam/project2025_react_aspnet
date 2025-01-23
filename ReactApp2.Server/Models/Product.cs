namespace ReactApp2.Server.Models
{
    public class Product
    {
        public int Id { get; set; }
        public int QuantityInStock { get; set; }
        public required string Name { get; set; }
        public string Description { get; set; }
     
        public required  double Price { get; set; }
        public bool IsInStore { get; set; }

        public string PictureUrl { get; set; }
        public string Type { get; set; }

        public required string Brand { get; set; }


    }
}
