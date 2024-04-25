
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import ThunderstormRoundedIcon from '@mui/icons-material/ThunderstormRounded';
import AcUnitRoundedIcon from '@mui/icons-material/AcUnitRounded';
const UserCard = ({info}) => {
  const Hot_Img="https://media.istockphoto.com/id/1254065595/photo/hot-summer-or-heat-wave-background.webp?b=1&s=170667a&w=0&k=20&c=3pJ8IywW-9H-bcZ2XNGG0EaKwYiWD3XdMLC-mAC6dFI="
 const Cold_Img="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
  const Rain_Img="https://images.unsplash.com/photo-1438449805896-28a666819a20?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww"
  
  return (
    <div className='ml-[500px] mt-5'>
 <Card sx={{ maxWidth: 345 }}  >
      <CardMedia sx={{ height: 140 }}
        image={info.humidity>75? Rain_Img:info.temp>15?Hot_Img: Cold_Img}
        title="green iguana"/>
      <CardContent>
        <Typography >{info.city}&nbsp;  {info.temp>75? <ThunderstormRoundedIcon/>: info.temp>15?<WbSunnyRoundedIcon/>:<AcUnitRoundedIcon/>}
         </Typography>
        <Typography variant="body2" color="text.secondary">
        <div>  Temprature:{info.temp}&deg;</div>
          <div >Max Temp:{info.max_temp}&deg;</div> 
           <div>Min Temp:{info.min_temp}&deg;</div>
           <div>Humidity:{info.humidity}&deg;</div>
           <div> whether:{info.weather}</div>
         </Typography>
      </CardContent>
      </Card>
    </div>
);
}

export default UserCard