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

        [Route("Home/Index")]
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
            int idLangLearn = (int)HttpContext.Session.GetInt32("idLangLearn");
            int idLangNative = (int)HttpContext.Session.GetInt32("idLangNative");

            List<DTO> NativeLearnLangCat = await _categories.GetTranslations(idLangLearn, idLangNative, null);

            return NativeLearnLangCat;
        }

        [Route("Home/Categories/SubCategories")]
        public async Task<IEnumerable<DTO>> SubCategories(int id)
        {
            if (id != 0)
            {
                HttpContext.Session.SetInt32("category", id);
            }
            else
            {
                id = (int)HttpContext.Session.GetInt32("category");
            }

            int idLangLearn = (int)HttpContext.Session.GetInt32("idLangLearn");
            int idLangNative = (int)HttpContext.Session.GetInt32("idLangNative");

            List<DTO> NativeLearnLangSubCat = await _categories.GetTranslations(idLangLearn, idLangNative, id);

            return NativeLearnLangSubCat;
        }

        [Route("Home/Categories/SubCategories/Tests")]
        public async Task<IEnumerable<DTO>> Tests(int id)
        {
            if (id != 0)
            {
                HttpContext.Session.SetInt32("subCategory", id);
            }
            else
            {
                id = (int)HttpContext.Session.GetInt32("subCategory");
            }

            int idLangLearn = (int)HttpContext.Session.GetInt32("idLangLearn");
            int idLangNative = (int)HttpContext.Session.GetInt32("idLangNative");

            List<DTO> NativeLearnLangTests = await _tests.GetTranslations(idLangLearn, idLangNative, id);

            Categories category = await _categories.GetItem(id);

            NativeLearnLangTests.First().CategoryId = category.ParentId;
            NativeLearnLangTests.First().SubCategoryId = category.Id;

            return NativeLearnLangTests;
        }
    }
}
