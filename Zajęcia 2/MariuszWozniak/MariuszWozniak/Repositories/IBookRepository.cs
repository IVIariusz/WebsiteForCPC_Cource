namespace MariuszWozniak.Models.Repositories
{
    public interface IBookRepository
    {
        public IEnumerable<book> GetAll();

        book? Get(int id);

    }
}
