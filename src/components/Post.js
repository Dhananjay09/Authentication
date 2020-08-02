import React from 'react';
import { toast, ToastContainer } from "react-toastify";
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
    maxHeight: 1000,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));
export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.user.name}        
      />
      <CardMedia
        className={classes.media}
        image="data:image/jpeg;base64,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"
        title="Paella dish"
      />
      <CardActions disableSpacing>
        <IconButton onClick={()=>props.updatelike(props.user._id)}  aria-label="add to favorites">
          <FavoriteIcon />
          {props.user.likes}
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Contact Information:</Typography>
          <Typography paragraph>
          {props.user.email}
          </Typography>
          <Typography paragraph>
          PIN {props.user.pin}
          </Typography>
          <Typography paragraph>
          Address {props.user.address}
          </Typography>
          <Typography>
          Product name {props.user.product}
          </Typography>
          <Typography>
          Uploaded At: {props.user.createdAt}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}