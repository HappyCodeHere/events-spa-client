import React, { PropTypes } from 'react';

import { ShareButtons, ShareCounts, generateShareIcon } from 'react-share';

import './ShareButtons.scss';

const { VKShareButton, FacebookShareButton, TwitterShareButton, TelegramShareButton, LinkedinShareButton, GooglePlusShareButton } = ShareButtons;
const { VKShareCount, FacebookShareCount, LinkedinShareCount, GooglePlusShareCount } = ShareCounts;

const VKIcon = generateShareIcon('vk');
const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const TelegramIcon = generateShareIcon('telegram');
const LinkedinIcon = generateShareIcon('linkedin');
const GooglePlusIcon = generateShareIcon('google');

const link = 'eventsfree.by';
const title = 'Все бесплатные мероприятия в одном месте!';
const description = 'some info';
const size = 32;
const image = 'http://jquery-plugins.net/image/plugin/likely-social-sharing-buttons.png';

const propTypes = {

}

const SharedButtons = () => {
  return (
    <ul className="shared-buttons">

      <li>
        <VKShareButton url={link} title={title} description={description} image={image}>
          <VKIcon size={size} round={true} />
          <VKShareCount url={link}>
            {shareCount => (
              <span className="myShareCountWrapper">{shareCount}</span>
            )}
          </VKShareCount>
        </VKShareButton>
      </li>

      <li>
        <FacebookShareButton url={link} title={title} description={description} picture={image}>
          <FacebookIcon size={size} round={true} />
          <FacebookShareCount url={link}>
            {shareCount => (
              <span className="myShareCountWrapper">{shareCount}</span>
            )}
          </FacebookShareCount>
        </FacebookShareButton>
      </li>

      <li>
        <TwitterShareButton url={link} title={title}>
          <TwitterIcon size={size} round={true} />
        </TwitterShareButton>
      </li>

      <li>
        <TelegramShareButton url={link} title={title}>
          <TelegramIcon size={size} round={true} />
        </TelegramShareButton>
      </li>

      <li>
        <LinkedinShareButton url={link} title={title} description={description}>
          <LinkedinIcon size={size} round={true} />
          <LinkedinShareCount url={link}>
            {shareCount => (
              <span className="myShareCountWrapper">{shareCount}</span>
            )}
          </LinkedinShareCount>
        </LinkedinShareButton>
      </li>

      <li>
        <GooglePlusShareButton url={link}>
          <GooglePlusIcon size={size} round={true} />
          <GooglePlusShareCount url={link}>
            {shareCount => (
              <span className="myShareCountWrapper">{shareCount}</span>
            )}
          </GooglePlusShareCount>
        </GooglePlusShareButton>
      </li>

    </ul>
  )
}

SharedButtons.propTypes = propTypes;

export default SharedButtons;
