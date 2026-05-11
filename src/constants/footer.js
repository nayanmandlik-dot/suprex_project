import { FaXTwitter, FaInstagram, FaFacebookF, FaDiscord } from 'react-icons/fa6';

export const FOOTER_LINK_COLUMNS = [
  {
    title: 'About',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Partners', href: '#' },
      { label: 'Community', href: '#' },
      { label: 'Creators', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms Of Use', href: '#' },
      { label: 'Customer Acceptance\nPolicy', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Sweepstakes Rules', href: '#' },
      { label: 'Responsible Gaming', href: '#' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Contact Us', href: '#' },
      { label: 'FAQ', href: '#' },
    ],
  },
];

export const SOCIAL_LINKS = [
  { label: 'X (Twitter)', href: '#', Icon: FaXTwitter },
  { label: 'Instagram', href: '#', Icon: FaInstagram },
  { label: 'Facebook', href: '#', Icon: FaFacebookF },
  { label: 'Discord', href: '#', Icon: FaDiscord },
];
