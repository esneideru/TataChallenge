using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Text;
using Tata.Web.Api.DTOs;
using Tata.Web.Api.Models;
using System.IdentityModel.Tokens.Jwt;
using Tata.Web.Api.Helpers;

namespace Tata.Web.Api.Controllers
{
    [ApiController]
    [Route("api/login")]
    public class LoginController : ControllerBase
    {

        private readonly IConfiguration configuration;

        public LoginController(IConfiguration configuration)
        {
            this.configuration = configuration;
        }


        [HttpGet]
        public ActionResult Get()
        {
            return Ok("El servicio esta disponible");
        }

        [HttpPost]
        public ActionResult<UsuarioTokenDTO> Login([FromBody] Usuario usuario)
        {

            if (usuario == null)
            {
                return BadRequest("Login Invalido, por favor verifique");
            }

            if (usuario.Nombre == "Admin")
            {
                string pass = new EncriptDecript().DecryptString(usuario.Password);

                Usuario userValidate = new Usuario();
                userValidate.Password = Hash.Create("VGAdmin20!", userValidate.Salt);


                var match = Hash.Validate(pass.Trim(), userValidate.Salt, userValidate.Password.Trim());

                if (match)
                {
                    return ConstruirToken(usuario);
                }
                else
                {
                    return BadRequest("Login Invalido, por favor verifique");
                }
            }
            else
            {
                return BadRequest("Login Invalido, por favor verifique");
            }
        }

        private UsuarioTokenDTO ConstruirToken(Usuario usuario)
        {
            var claims = new List<Claim>()
            {
                new Claim(ClaimTypes.Name, usuario.Nombre),
                new Claim(ClaimTypes.Email, usuario.Nombre)
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["JWT:key"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var expiracion = DateTime.UtcNow.AddDays(30);

            JwtSecurityToken token = new JwtSecurityToken(
                    issuer: null,
                    audience: null,
                    claims: claims,
                    expires: expiracion,
                    signingCredentials: creds
           );

            return new UsuarioTokenDTO()
            {
                Nombre = usuario.Nombre,
                Email = usuario.Email,
                Token = new JwtSecurityTokenHandler().WriteToken(token),
                Expiracion = expiracion
            };
        }


    }
}
