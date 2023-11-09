using MariuszWozniak.Models;
using MariuszWozniak.Models.Repositories;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace MariuszWozniak.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IBookRepository _bookRepository;

        public HomeController(ILogger<HomeController> logger, IBookRepository bookRepository)
        {
            _logger = logger;
            _bookRepository = bookRepository;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult AllBooks()
        {
            return View(_bookRepository.GetAll());
        }

        public IActionResult BookDetails(int id)
        {
            return View(_bookRepository.Get(id));
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}