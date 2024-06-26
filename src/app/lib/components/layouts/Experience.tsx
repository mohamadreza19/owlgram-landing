import Image from 'next/image';
import { FunctionComponent, useEffect } from 'react';
import { Container1 } from '../containers';
import { SegmentComponentProps } from '../../shared';
import { useInView } from 'react-intersection-observer';

interface ExperienceProps extends SegmentComponentProps {}

import BigPhone from '/public/asset/banner/big-phone.png';
import { useTranslations } from 'next-intl';

const Experience: FunctionComponent<ExperienceProps> = ({
  id,
  appHeaderRef,
  onView,
}) => {
  const { ref: ref, inView: inView1 } = useInView({ threshold: 0 });
  const t = useTranslations('index');
  useEffect(() => {
    if (inView1) {
      onView();
      window.scrollTo(0, 0);
    }
  }, [inView1]);

  return (
    <Container1 bg="bg-gray-100">
      <div
        id={id}
        ref={ref}
        className=" w-full flex flex-col justify-center items-center pt-8"
      >
        <section
          className={`md:w-[563px] w-full flex flex-col items-center animate__animated animation-delay-1000 ${
            inView1 && 'animate__fadeIn'
          }`}
        >
          <div className="w-fit flex gap-x-2 py-1 px-2 bg-white rounded-3xl">
            <Image
              className="rounded-full min-w-6 min-h-6 max-w-6 max-h-6 object-cover"
              src={'/asset/flag/uae.svg'}
              width={24}
              height={24}
              alt="flag"
              unoptimized
            />
            <p className="text-lg">{t('experience.UnitedArabEmirates')}</p>
          </div>
          <div>
            <p className="md:text-[56px] text-[35px] font-normal text-nowrap">
              {t('experience.UseOurNewPlatform')}
            </p>

            <p className="md:text-[56px] text-[35px] font-normal text-nowrap">
              {t('experience.forBetter')}
              <span className="inline-block ms-5 font-bold text-teal-700">
                {t('experience.experience')}
              </span>
            </p>
          </div>
          <div>
            <p className="text-center text-lg font-light">
              {t('experience.paragraph1')}
            </p>
          </div>
        </section>
        <section className="w-full pt-4 flex flex-col items-center  relative ">
          <div className="w-fit">
            <Image unoptimized {...BigPhone} alt="big-phone" />
          </div>

          <div className="absolute right-[17%] w-[265px] h-[57px] flex items-center justify-center  bg-container-1 bg-no-repeat bg-cover drop-shadow-xl text-sm ">
            {t('text1')}
          </div>
          <div className="absolute right-[11%] top-[20%] w-[236px]  h-[55px] flex items-center justify-center  bg-container-2 bg-no-repeat bg-cover drop-shadow-xl text-sm text-white ">
            {t('text2')}
          </div>
        </section>
      </div>
    </Container1>
  );
};

export default Experience;
