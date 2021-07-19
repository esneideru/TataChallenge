using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Tata.Web.Api.Controllers;
using Tata.Web.Api.DTOs;
using Tata.Web.Api.Models;

namespace Tata.Web.Api.Test.PruebasUnitarias
{
    [TestClass]
    public class RepeatedWordsControllerTest
    {
        [TestMethod]
        public void count_Words_repeated_isValid()
        {
            RepeatedWordsController word = new RepeatedWordsController();
            TextoDTO text = new TextoDTO();

            text.TextoPlano = "Contar palabras repetidas para contar sus repeticiones";
            var texto = (OkObjectResult)word.Post(text).Result;
            var textoResult = (Texto) texto.Value;

            Assert.AreEqual(1, textoResult.Palabras.Where(x => x.Cantidad == 2).Count());
        }
    }
}
