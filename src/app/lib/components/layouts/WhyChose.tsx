import Image from 'next/image';
import { FunctionComponent, useEffect } from 'react';

import Banner1 from '/public/asset/banner/banner-cripto.png';
import Banner2 from '/public/asset/banner/banner-allService.png';
import Banner3 from '/public/asset/banner/banner-free-transfer.png';
import Banner4 from '/public/asset/banner/banner-videoCall.png';
import Banner5 from '/public/asset/banner/banner-check-out-products.png';
import Banner6 from '/public/asset/banner/banner-chat.png';
import { Container1 } from '../containers';
import { SegmentComponentProps } from '../../shared';
import { useInView } from 'react-intersection-observer';
import { useTranslations } from 'use-intl';

interface WhyChoseProps extends SegmentComponentProps {}

const WhyChose: FunctionComponent<WhyChoseProps> = ({ id, onView }) => {
  const { ref: ref, inView: inView1 } = useInView({ threshold: 0 });
  const t = useTranslations('index');
  useEffect(() => {
    if (inView1) {
      onView();
    }
  }, [inView1]);
  return (
    <Container1 bg="bg-gray-100">
      <div
        ref={ref}
        id={id}
        className="pt-[120px] flex flex-col 
  "
      >
        <section
          className={`flex  flex-col justify-center items-center animate__animated animation-delay-600 ${
            inView1 && 'animate__fadeIn'
          }`}
        >
          <p className="font-normal text-[22px]">
            {t('why-chose.onePlatformForAll')}
          </p>
          <p className="font-bold text-[50px] text-center">
            {t('why-chose.whyChooseOwlegram')}
          </p>
          <p className="text-lg font-light text-center md:w-[733px] w-full">
            {t('why-chose.paragraph1')}
          </p>
        </section>
        <section className="pt-[48px]  flex md:flex-row flex-col items-center flex-wrap gap-y-4 ">
          <div
            className={`grid md:grid-cols-2 grid-cols-1 gap-4  animate__animated animation-delay-900 ${
              inView1 && 'animate__fadeInUp'
            }`}
          >
            <div className=" max-w-[590px]  max-h-[536px]">
              <Image
                unoptimized
                src={Banner2.src}
                fill
                className="!static"
                alt="banner"
              />
            </div>
            <div className=" max-w-[590px]  max-h-[536px]">
              <Image
                unoptimized
                src={Banner1.src}
                fill
                className="!static"
                alt="banner"
              />
            </div>
          </div>

          <div
            className={`w-full min-w-full h-[296px]  animate__animated animation-delay-1000 ${
              inView1 && 'animate__fadeInUp'
            }`}
          >
            <Image
              unoptimized
              src={Banner3.src}
              fill
              className="!static"
              alt="banner"
            />
          </div>
          <div
            className={
              'grid md:grid-cols-3 grid-cols-1 md:gap-y-0 gap-y-4  gap-x-4'
            }
          >
            <div className=" max-w-[383px]  max-h-[300px]">
              <Image
                unoptimized
                src={Banner6.src}
                fill
                className="!static"
                alt="banner"
              />
            </div>

            <div className=" max-w-[383px]  max-h-[300px]">
              <Image
                unoptimized
                src={Banner5.src}
                fill
                className="!static"
                alt="banner"
              />
            </div>
            <div className=" max-w-[383px]  max-h-[300px]">
              <Image
                unoptimized
                src={Banner4.src}
                fill
                className="!static"
                alt="banner"
              />
            </div>
          </div>
        </section>
      </div>
    </Container1>
  );
};

export default WhyChose;
