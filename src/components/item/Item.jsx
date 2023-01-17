import {Link} from "react-router-dom"
import "./Item.css"
import {Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Box} from '@mui/material'


const Item = ({element}) => {
  return (
    <div className="card-item">
      <Card sx={{ maxWidth: 345 }} sm={6} md={6} lg={4} spacing={2}>
        <CardMedia
          sx={{ height: 300 }}
          image={element.img}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color="primary">
            {element.name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {element.description}
          </Typography>
          <Typography variant="body1" color="secondary">
            ${element.price}.-
          </Typography>
        </CardContent>
        <CardActions style={{display: "flex", justifyContent: "center"}}>
        <Link to={`/itemDetail/${element.id}`}><Button size="large" variant="contained">Ver detalle</Button></Link>
        </CardActions>
      </Card>
      </div>
  );
}

export default Item