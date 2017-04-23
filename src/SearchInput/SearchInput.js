import React, { Component } from 'react';
import Autosuggest, { ItemAdapter } from 'react-bootstrap-autosuggest'
import './SearchInput.css';

const data = {
  "authors": [
      {
        "name": "Henry David Thoreau",
        "permalink": "henry-david-thoreau",
        "count": 148
      },
      {
        "name": "Ralph Waldo Emerson",
        "permalink": "ralph-waldo-emerson",
        "count": 139
      },
      {
        "name": "Albert Einstein",
        "permalink": "albert-einstein",
        "count": 134
      },
      {
        "name": "Friedrich Nietzsche",
        "permalink": "friedrich-nietzsche",
        "count": 122
      },
      {
        "name": "Mark Twain",
        "permalink": "mark-twain",
        "count": 119
      },
      {
        "name": "Mahatma Gandhi",
        "permalink": "mahatma-gandhi",
        "count": 118
      },
      {
        "name": "George Bernard Shaw",
        "permalink": "george-bernard-shaw",
        "count": 117
      },
      {
        "name": "Benjamin Franklin",
        "permalink": "benjamin-franklin",
        "count": 112
      },
      {
        "name": "Oscar Wilde",
        "permalink": "oscar-wilde",
        "count": 112
      },
      {
        "name": "Mitt Romney",
        "permalink": "mitt-romney",
        "count": 109
      },
      {
        "name": "Thomas Jefferson",
        "permalink": "thomas-jefferson",
        "count": 102
      },
      {
        "name": "Francois de La Rochefoucauld",
        "permalink": "francois-de-la-rochefoucauld",
        "count": 100
      },
      {
        "name": "Aristotle",
        "permalink": "aristotle",
        "count": 99
      },
      {
        "name": "Plato",
        "permalink": "plato",
        "count": 98
      },
      {
        "name": "Barack Obama",
        "permalink": "barack-obama",
        "count": 94
      },
      {
        "name": "Voltaire",
        "permalink": "voltaire",
        "count": 93
      },
      {
        "name": "Marcus Tullius Cicero",
        "permalink": "marcus-tullius-cicero",
        "count": 88
      },
      {
        "name": "Benjamin Disraeli",
        "permalink": "benjamin-disraeli",
        "count": 88
      },
      {
        "name": "Winston Churchill",
        "permalink": "winston-churchill",
        "count": 88
      },
      {
        "name": "William Shakespeare",
        "permalink": "william-shakespeare",
        "count": 88
      },
      {
        "name": "Johann Wolfgang von Goethe",
        "permalink": "johann-wolfgang-von-goethe",
        "count": 87
      },
      {
        "name": "Victor Hugo",
        "permalink": "victor-hugo",
        "count": 85
      },
      {
        "name": "Hillary Clinton",
        "permalink": "hillary-clinton",
        "count": 84
      },
      {
        "name": "Lucius Annaeus Seneca",
        "permalink": "lucius-annaeus-seneca",
        "count": 84
      },
      {
        "name": "Samuel Johnson",
        "permalink": "samuel-johnson",
        "count": 83
      },
      {
        "name": "Ambrose Bierce",
        "permalink": "ambrose-bierce",
        "count": 81
      },
      {
        "name": "Samuel Butler",
        "permalink": "samuel-butler",
        "count": 81
      },
      {
        "name": "John F. Kennedy",
        "permalink": "john-f-kennedy",
        "count": 81
      },
      {
        "name": "Bertrand Russell",
        "permalink": "bertrand-russell",
        "count": 79
      },
      {
        "name": "Steve Jobs",
        "permalink": "steve-jobs",
        "count": 79
    }
  ]
};

const authors = data.authors.map((author, index) => ({
  name: author.name,
  permalink: author.permalink,
  sortKey: index,
  textReps: [author.name.toLowerCase()]
}))

class AuthorAdapter extends ItemAdapter {
  getTextRepresentations(item) {
    return item.textReps
  }
  renderItem(item) {
    return <div className="author-item">{item.name}</div>
  }
}

AuthorAdapter.instance = new AuthorAdapter()

class SearchInput extends Component {
  setAuthorState(selectedValue) {
    var author = {}

    if(selectedValue !== null && selectedValue.name !== undefined) {
      author = selectedValue
    } else {
      author = { name: selectedValue }
    }

    this.props.updateAuthor(author)
  }
  
  render() {
    return (
       <Autosuggest
        datalist={authors}
        placeholder="Quotes of which author you would like to find?"
        itemAdapter={AuthorAdapter.instance}
        itemReactKeyPropName="permalink"
        itemValuePropName="name"
        onSelect={this.setAuthorState.bind(this)} />
    );
  }
}

export default SearchInput;
