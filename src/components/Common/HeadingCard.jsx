import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    color:'white',
    background:'#343a40'
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function HeadingCard({ heading,bgcolor }) {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root+' mb-3'} style={{background:bgcolor}}>
        <CardContent className='p-2 text-center'>
          <Typography variant="h4" component="h2" >
            {heading}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default HeadingCard;
