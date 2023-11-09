using MariuszWozniak.Models;
using MariuszWozniak.Models.Repositories;

namespace MariuszWozniak.Repositories
{
    public class FakeBookRepository : IBookRepository
    {
        private static readonly ICollection<book> _books = new List<book>
        {
            new book(1, "Władca Pierścieni: Drużyna Pierścienia", 29, "Powieść fantasy J.R.R. Tolkiena opisująca podróż małej grupy przyjaciół w celu zniszczenia potężnego pierścienia.", "image1.jpg"),
            new book(2, "Harry Potter i Kamień Filozoficzny", 24, "Pierwsza część serii o młodym czarodzieju Harrym Potterze, napisana przez J.K. Rowling.", "image2.jpg"),
            new book(3, "Wojna i pokój", 34, "Epicka powieść Lwa Tołstoja, opowiadająca o życiu rosyjskiej arystokracji w okresie wojen napoleońskich.", "image3.jpg"),
            new book(4, "1984", 27, "Dystopijna powieść George'a Orwella opisująca totalitarny reżim i kontrolę nad ludźmi.", "image4.jpg"),
            new book(5, "Hobbit", 21, "Powieść fantasy J.R.R. Tolkiena opisująca podróż małej grupy przyjaciół w celu odbicia domu kransoludów spod władzy smoka czarnoksiężnika który jest..", "image5.jpg")
        };

        public book? Get(int id)
        {
            return _books.FirstOrDefault(x => x.ID == id);
        }



        public IEnumerable<book> GetBooks()
        {
            return _books;
        }
    }
}
