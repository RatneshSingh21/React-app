import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function Info({info}) {
  const INIT_URl =
    "https://images.unsplash.com/photo-1673191898695-8252d409d82c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    // let info={
    //     city: "Noida",
    //     feelsLike: 31.87,
    //     humidity: 76,
    //     temp:28.16,
    //     tempMax:28.16,
    //     tempMin:28.16,
    //     weather:"overcast clouds"
    // }

  return (
    <>
            <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={INIT_URl}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography variant="body2" color="text.secondary" component={"span"}>
            <p>temperature={info.temp}&deg;C</p>
            <p>humidity={info.humidity}</p>
            <p>Min temp={info.tempMin}&deg;C</p>
            <p>Max temp={info.tempMax}&deg;C</p>
            <p>The weahter can be described as <i>{info.weather} and feels like {info.feelsLike}&deg;C</i></p>
          </Typography>
        </CardContent>
        
      </Card>
    </>
  );
}
