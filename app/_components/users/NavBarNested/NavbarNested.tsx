import { ScrollArea } from '@mantine/core';
import Link from 'next/link';
import { NavbarLinksGroup } from '../NavbarLinksGroup/NavbarLinksGroup';
import { UserButton } from '../UserButton/UserButton';
import classes from './NavbarNested.module.css';

const mockdata = [
  { label: 'Recommendations', iconName: 'IconGauge', link:'/user/recommendations' },
  {
    label: 'My List',
    iconName: 'IconNotes',
    initiallyOpened: true,
    links: [
      { label: 'Overview', link: '/user/recommendations' },
      { label: 'Forecasts', link: '/' },
      { label: 'Outlook', link: '/' },
      { label: 'Real time', link: '/' },
    ],
  },
  {
    label: 'Rated Books',
    iconName: 'IconCalendarStats',
    links: [
      { label: 'Upcoming releases', link: '/' },
      { label: 'Previous releases', link: '/' },
      { label: 'Releases schedule', link: '/' },
    ],
  },
  { label: 'Top Books', iconName: 'IconPresentationAnalytics' },
  { label: 'Explore Books', iconName: 'IconFileAnalytics' },
  { label: 'Settings', iconName: 'IconAdjustments' },
  // {
  //   label: 'Security',
  //   iconName: 'IconLock',
  //   links: [
  //     { label: 'Enable 2FA', link: '/' },
  //     { label: 'Change password', link: '/' },
  //     { label: 'Recovery codes', link: '/' },
  //   ],
  // },
];

export function NavbarNested() {
  const links = mockdata.map((item) => <NavbarLinksGroup {...item} key={item.label} />);

  return (
    <nav className={`${classes.navbar} h-full justify-between`}>
      <div className={`${classes.header} flex items-center`}>
          <Link href='/'><div className='text-2xl text-secondary-400 font-semibold'>Book<span className="text-primary-300">Match</span></div></Link>
      </div>

      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>

      <div className={classes.footer}>
        <UserButton />
      </div>
    </nav>
  );
}