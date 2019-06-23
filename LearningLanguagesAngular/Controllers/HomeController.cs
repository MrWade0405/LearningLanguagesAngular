using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using DAL.Repositories;
using DAL;
using DAL.Models;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;
using Microsoft.EntityFrameworkCore;

namespace LearningLanguages.Controllers
{
    public class HomeController : Controller
    {
        IRepository<Categories> _categories = new CategoriesRepository();

        IRepository<Languages> _languages = new LanguagesRepository();

        IRepository<Words> _words = new WordsRepository();

        IRepository<Tests> _tests = new TestsRepository();

        IRepository<Users> _users = new UsersRepository();

        IRepository<TestResults> _testResults = new TestResultsRepository();

        IRepository<TotalScores> _totalScores = new TotalScoresRepository();

        public IActionResult Index()
        {
            int defaultLang = 3;
            string defaultEnableCheckBox = "true";

            if (HttpContext.Session.GetInt32("idLangNative") == null)
            {
                HttpContext.Session.SetInt32("idLangNative", defaultLang);
                HttpContext.Session.SetInt32("idLangLearn", defaultLang);
                HttpContext.Session.SetString("enableNativeLang", defaultEnableCheckBox);
                HttpContext.Session.SetString("enableSound", defaultEnableCheckBox);
                HttpContext.Session.SetString("enablePronounceNativeLang", defaultEnableCheckBox);
                HttpContext.Session.SetString("enablePronounceLearnLang", defaultEnableCheckBox);
            }

            return Ok();
        }

        [Route("Home/Categories")]
        public async Task<IEnumerable<DTO>> Categories()
        {
            //int idLangLearn = (int)HttpContext.Session.GetInt32("idLangLearn");
            //int idLangNative = (int)HttpContext.Session.GetInt32("idLangNative");

            List<DTO> NativeLearnLangCat = await _categories.GetTranslations(3, 3, null);

            return NativeLearnLangCat;
        }
    }
}
