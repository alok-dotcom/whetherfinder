const cityname = document.getElementById('cityname');
const city_name = document.getElementById('city_name');
const submitbtn =document.getElementById('submitbtn');
const tem_real_val = document.getElementById('tem_real_val');
const temp_status = document.getElementById('temp_status');
const data_hide = document.querySelector('.middle_layer');
const getinfo = async(event) =>
 {
    event.preventDefault();
   let cityval = cityname.value;


   if(cityval===""){

    city_name.innerText=`plz write the name before search`;
    data_hide.classList.add('data_hide');
   }
    else
    {
       try{ 
              let url= `http://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=9eebde2dc289b5f80b37d157ac1b55b4`;
              const response = await fetch(url);
              const data = await response.json();
              //console.log(data);
              const arrdata = [data];
       
              city_name.innerText=`${arrdata[0].name},${arrdata[0].sys.country}`;
              tem_real_val.innerText = arrdata[0].main.temp;
               
               const tempmood =arrdata[0].weather[0].main;
               //condition to check sunny or cloudy
               if(tempmood =="Clear")
               {
                   temp_status.innerHTML=" <i class='fas fa-sun' style='color:#eccc68;'></i>";
               }else if(tempmood=="Clouds")
               {
                   temp_status.innerHTML=" <i class='fas fa-cloud' style='color:#f1f2f6;'></i>"
               }else if(tempmood=="Rain")
                   {
                       temp_status.innerHTML=" <i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>"
                   }
                   else 
                   {
                       temp_status.innerHTML=" <i class='fas fa-sun' style='color:#eccc68;'></i>"
                   }

                   data_hide.classList.remove('data_hide');

         }
         catch
         {
            city_name.innerText = `pz enter city name properly`;
            data_hide.classList.add('data_hide');
         }
    }

      
}
submitbtn.addEventListener('click',getinfo);