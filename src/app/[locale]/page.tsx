'use client';
import { useTranslations } from 'next-intl';
import {
  FunctionComponent,
  ReactElement,
  RefObject,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  AppHeader,
  Container1,
  DownloadApp,
  Experience,
  Faq,
  Footer,
  Services,
  Team,
  WhyChose,
} from '../lib/components';
import { SegmentComponentProps } from '../lib/shared';
import { getLocale } from 'next-intl/server';
import { useRouter } from '@/navigation';

interface IComponent {
  component: FunctionComponent<SegmentComponentProps>;
}

const components: IComponent[] = [
  {
    component: Experience,
  },
  {
    component: WhyChose,
  },
  {
    component: Services,
  },
  {
    component: DownloadApp,
  },
  {
    component: Team,
  },
  {
    component: Faq,
  },
  {
    component: Footer,
  },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const appHeaderRef = useRef<HTMLDivElement>(null);

  const t = useTranslations('index');

  const menu = [
    {
      id: 'experience',
      text: t('app-header.HomePage'),
    },
    {
      id: 'whyChose',
      text: t('app-header.AboutOwlegram'),
    },
    {
      id: 'services',
      text: t('app-header.Services'),
    },
    {
      id: 'download',
      text: t('app-header.Download'),
    },
    {
      id: 'team',
      text: t('app-header.Team'),
    },

    {
      id: 'FAQ',
      text: t('app-header.FAQ'),
    },
    {
      id: 'contact',
      text: t('app-header.Contact'),
    },
  ];

  function handleSetActiveIndex(index: number) {
    setActiveIndex(index);
  }
  return (
    <>
      <AppHeader
        activeIndex={activeIndex}
        menu={menu}
        onView={() => {}}
        id="app-header"
      />

      {components.map((item, index) => {
        const { component: Component } = item;

        return (
          <Component
            onView={() => handleSetActiveIndex(index)}
            appHeaderRef={appHeaderRef}
            id={menu[index].id}
            key={index}
          />
        );
      })}
    </>
  );
}
