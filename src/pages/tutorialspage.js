import React, { Component } from "react";
import {
  Grid,
  Cell,
  Card,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  CardTitle
} from "react-mdl";

class Tutorials extends Component {
  render() {
    return (
      <div>
        <Grid className="demo-grid-3">
          <Cell col={3} tablet={3}>
            <Card shadow={0} style={{}}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background:
                    "url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover"
                }}
              >
                Welcome
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                sagittis pellentesque lacus eleifend lacinia...
              </CardText>
              <CardActions border>
                <Button colored>Get Started</Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </Cell>

          <Cell col={3} tablet={3}>
            <Card shadow={0} style={{}}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background:
                    "url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover"
                }}
              >
                Welcome
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                sagittis pellentesque lacus eleifend lacinia...
              </CardText>
              <CardActions border>
                <Button colored>Get Started</Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </Cell>
          <Cell col={3} tablet={3}>
            <Card shadow={0} style={{}}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background:
                    "url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover"
                }}
              >
                Welcome
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                sagittis pellentesque lacus eleifend lacinia...
              </CardText>
              <CardActions border>
                <Button colored>Get Started</Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </Cell>
          <Cell col={3} tablet={3}>
            <Card shadow={0} style={{}}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "176px",
                  background:
                    "url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover"
                }}
              >
                Welcome
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                sagittis pellentesque lacus eleifend lacinia...
              </CardText>
              <CardActions border>
                <Button colored>Get Started</Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Tutorials;
