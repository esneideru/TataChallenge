using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Tata.Web.Api.DTOs;
using Tata.Web.Api.Models;

namespace Tata.Web.Api.Controllers
{
    [ApiController]
    [Route("api/repeatedwords")]
    public class RepeatedWordsController : ControllerBase
    {
        public RepeatedWordsController()
        {

        }

        [HttpPost]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public ActionResult<Texto> Post([FromBody] TextoDTO texto)
        {
            if (texto == null)
            {
                return BadRequest("el Texto esta vacío, por favor verifique");
            }

            var currentText = new PalabrasRepetidas(texto.TextoPlano).ProcesarTexto();
            return Ok(currentText);
        }
    }
}
