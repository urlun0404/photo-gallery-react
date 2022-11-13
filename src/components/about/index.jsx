import * as s from './styles';
import { photoHover, photoDetails } from 'images';
import {
  RiGithubLine,
  RiLinkedinLine,
  RiGlobalLine,
  RiMailLine,
  RiArticleLine,
} from 'react-icons/ri';

export default function About() {
  return (
    <s.About>
      <s.Title>Website Usage</s.Title>
      <s.Article id="usage">
        <s.Container>
          <s.SubTitle>Usage of Homepage</s.SubTitle>
          <s.Text></s.Text>
          <img src={photoHover} />
        </s.Container>
        <s.Container>
          <s.SubTitle>Usage of Photo Details</s.SubTitle>
          <s.Text></s.Text>
          <img src={photoDetails} />
        </s.Container>
      </s.Article>
      <s.Title>Author</s.Title>
      <s.Article id="author">
        <s.Container>
          <s.SubTitle>You-Lun, Lin</s.SubTitle>
          <s.Links>
            <a
              href="mailto:urlun0404@gmail.com?subject=Feedback_&body=Message"
              target="_blank"
              title="mail"
            >
              <RiMailLine />
            </a>
            <a href="#" target="_blank" title="personal website">
              <RiGlobalLine />
            </a>
            <a
              href="https://urlun0404.coderbridge.io/"
              target="_blank"
              title="blog"
            >
              <RiArticleLine />
            </a>
            <a
              href="https://github.com/urlun0404"
              target="_blank"
              title="github"
            >
              <RiGithubLine />
            </a>
            <a
              href="https://www.linkedin.com/in/urlun0404"
              target="_blank"
              title="linkedin"
            >
              <RiLinkedinLine />
            </a>
          </s.Links>
        </s.Container>
      </s.Article>
    </s.About>
  );
}
