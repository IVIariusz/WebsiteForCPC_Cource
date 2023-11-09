namespace MariuszWozniak.Models
{
    public class book
    {
        public book(int iD, string name, int price, string description, string image)
        {
            ID = iD;
            Name = name;
            Price = price;
            Description = description;
            Image = image;
        }

        public int ID{ get; set; }
        public string Name {  get; set; }
        
        public decimal Price {  get; set; }

        public string Description {  get; set; }

        public string Image {  get; set; }

    }
}
