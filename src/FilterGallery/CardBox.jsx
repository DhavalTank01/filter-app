import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
const CardBox = (prop) => {
  return (
    <>
      <Card className="CardBox" id={prop.id}>
        <CardActionArea>
          <CardContent>
            <img src={prop.image} alt={prop.name} />
            <Typography gutterBottom variant="h5" component="h2">
              <span className="text-capitalize"> {prop.name}</span>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <span className="text-capitalize">{prop.description}</span>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" className="btn2">
            <a
              href={prop.image}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              download
            </a>
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default CardBox;
