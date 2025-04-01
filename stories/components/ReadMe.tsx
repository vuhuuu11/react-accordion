import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function ReadMe() {
  const [content, setContent] = useState('');
  useEffect(() => {
    fetch('/README.md')
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return <ReactMarkdown>{content}</ReactMarkdown>;
}
