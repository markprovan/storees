var UserStoriesApp = React.createClass({
  mixins: [React.addons.LinkedStateMixin],

  getInitialState: function() {
    return {data: [], as_a: '', i_can: '', so_that: ''}
  },

  createStory: function(e) {
    e.preventDefault();
    this.state.data.push({as_a: this.state.as_a, i_can: this.state.i_can, so_that: this.state.so_that});
    this.setState({as_a: '', i_can: '', so_that: ''});
  },  

  render: function() {
    var contentRows = this.state.data.map(function (story) {
      return (
        <tr>
          <td>{story.as_a}</td>
          <td>{story.i_can}</td>
          <td>{story.so_that}</td>
        </tr>
      );
    });
    return (
      <article className="container">
       <table class="story">
          <thead>
            <tr>
              <td>As a..</td>
              <td>I can..</td>
              <td>So that..</td>
            </tr>
          </thead>
          <tbody>
            {contentRows} 
            <tr>
              <td><input type="text" placeholder="As a.." onChange={this.setAsA} valueLink={this.linkState('as_a')} /></td>
              <td><input type="text" placeholder="I can.." onChange={this.setICan} valueLink={this.linkState('i_can')}/></td>
              <td><input type="text" placeholder="So that.." onChange={this.setSoThat} valueLink={this.linkState('so_that')}/></td>
              <td><a href="#" onClick={this.createStory}>Create</a></td>
            </tr>
          </tbody>
        </table>
      </article>
    );
  }
});

React.render(<UserStoriesApp />, document.getElementById("container"));