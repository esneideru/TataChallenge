using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tata.Web.Api.DTOs;
using Tata.Web.Api.Models;

namespace Tata.Web.Api.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Texto, TextoDTO>().ReverseMap();
        }
       
    }
}
