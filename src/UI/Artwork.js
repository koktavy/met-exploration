import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { artCardStyle } from './artCardStyle'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

class ArtCardComponent extends React.Component {
  state = {
    flipped: false
  }

  static defaultProps = {
      "key": 0,
      "artist": "Unauthored",
      "title": "Nontitled",
      "date":"0",
      "medium":"Ether",
      "dimensions": "Infinite",
      "department": "Blank department",
      "image": "https://static.thenounproject.com/png/340719-200.png",
      "flipped": false
  }

  componentDidMount() {
    return this.setState({ flipped: this.props.flipped }) // Take the global state value as the default
  }

  onClickCard = () => { // Arrow functions automatically bind `this` within function context
    this.setState({ flipped: !this.state.flipped })
  }

  checkForImage = (image) => {
    console.log("checking")
    if (image === "") {
      this.onClickCard()
      return "https://static.thenounproject.com/png/340719-200.png"
    }
    return image
  }

  render() {
    const {
      classes,
      key,
      artist,
      title,
      date,
      medium,
      dimensions,
      department,
      image,
      flipped } = this.props; // Remember, this is simply destructuring syntax for this.props.etc
    
    return (
      <Card className={classes.card} onClick={this.onClickCard}>
        <CardActionArea className={classes.actionArea}>
          {this.state.flipped ? // NOTE the local state value being used.
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {artist}
              </Typography>
              <Typography variant="h5" gutterBottom>
                {title}, {date}
              </Typography>
              <Typography variant="body2" gutterBottom color="textSecondary">
                {medium}
              </Typography>
              <Typography variant="body2" gutterBottom color="textSecondary">
                {dimensions}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {department}
              </Typography>
            </CardContent>
            :
            <img id={key} src={this.checkForImage(image)} className={classes.img} alt={title}/>
          }
         
        </CardActionArea>
        {/*
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
        */}
      </Card>
    );
  }

}

export const ArtCard = withStyles(artCardStyle)(ArtCardComponent) // Providing withStyles props
