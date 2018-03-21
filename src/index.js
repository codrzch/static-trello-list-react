import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const List = ({ list }) => (
    <div className="list">
      <h4 className="list-title">{list.title}</h4>
      <ul className="list-items">
        {list.cards.map(item =>
          <li className="list-item" key={item.id}>{item.title}</li>
        )}
      </ul>
      <div className="add-card">Add a card...</div>
    </div>
);

const Board = ({ board: { title, lists } }) => (
    <div className="board">
      <h4 className="board-title">{title}</h4>
      <div className="board-lists">
        {lists.map(list =>
          <List key={list.id} list={list} />
        )}
      </div>
    </div>
);

let list1 = {
  id: 0,
  title: "In Progress",
  cards: [
    {
      id: 0,
      title: "EditableFieldView"
    },
    {
      id: 1,
      title: "Fix markAsViewed logic"
    },
    {
      id: 2,
      title: "Renderable Action"
    },
    {
      id: 3,
      title: "Renderable Detail View"
    },
    {
      id: 4,
      title: "New Design"
    },
    {
      id: 5,
      title: "J/K Keyboard Shortcuts Disabled"
    },
    {
      id: 6,
      title: "Login Screen Wireframes"
    }
  ]
};

let list2 = {
  id: 1,
  title: "Testing",
  cards: [
    {
      id: 0,
      title: "Attachment preview icon"
    },
    {
      id: 1,
      title: "Don't Display Private Documents To Team"
    },
    {
      id: 2,
      title: "Clicking icon should open pop-over"
    }
  ]
};

let list3 = {
  id: 2,
  title: "Tested",
  cards: [
    {
      id: 0,
      title: "Let the server choose the default name when creating a file from a URL"
    },
    {
      id: 1,
      title: "Attach URL's from comment"
    },
    {
      id: 2,
      title: "Plugins"
    },
    {
      id: 3,
      title: "Update CSS"
    }
  ]
};

let list4 = {
  id: 3,
  title: "Code Review",
  cards: [
    {
      id: 0,
      title: "Plugin enable/disable actions"
    },
    {
      id: 1,
      title: "New Diagnostics"
    },
    {
      id: 2,
      title: "Pre-load attachments"
    },
    {
      id: 3,
      title: "Add post-message-io"
    }
  ]
};

let board = {
  lists: [list1, list2, list3, list4]
};

ReactDOM.render(
    <Board board={board} />,
    document.querySelector('#root')
);
