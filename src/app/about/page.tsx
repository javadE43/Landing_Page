import Link from "next/link";
import React from "react";
import { HiArrowLongRight } from "react-icons/hi2";

export default function About() {
  return (
    <section className="relative w-full flex flex-col pr-[35px] pl-[24px] pt-[12px] lg:justify-center lg:items-center lg:py-[300px]">
      <div className="flex mb-[12px] items-center min-w-[86px] min-h-[27px]">
        <Link
          className="h-full flex items-center justify-center text-white ml-1 text-16 leading-24 mb-[12px]  md:text-16 md:leading-24 lg:text-24 lg:leading-32 text-center lg:absolute lg:right-7 lg:inline lg:top-0"
          href="/"
        >
          <HiArrowLongRight />
        </Link>
        <h2 className="text-white text-16 leading-24 mb-[12px]  md:text-16 md:leading-24 lg:text-24 lg:leading-32">درباره ما</h2>
      </div>
      <article className="grid grid-col-1 lg:grid-cols-2 lg:gap-7">
        <div className="">
          <h2 className="text-base-yellow text-16 leading-24 my-4 md:text-16 md:leading-24 lg:text-24 lg:leading-32">
            مختصری از فعالیت ها!
          </h2>
          <p className="text-justify text-white text-14 leading-24 md:text-14 md:leading-24 lg:text-16 lg:leading-24">
            اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن
            های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا
            طرح‌نما (به انگلیسی: Lorem ipsum) متنی ساختگی و بدون معنی است که
            برای امتحان فونت و یا پر کردن فضا در یک طراحی گرافیکی و یا صنعت چاپ
            استفاده میشود. طراحان وب و گرافیک از این متن برای پرکردن صفحه و
            ارائه شکل کلی طرح استفاده می‌کنند. طراحان سایت هنگام طراحی قالب سایت
            معمولا با این موضوع رو برو هستند که محتوای اصلی صفحات آماده نیست. در
            نتیجه طرح کلی دید درستی به کار فرما نمیدهد. اگر طراح بخواهد دنبال
            متن های مرتبط بگردد تمرکزش از روی کار اصلی برداشته میشود و اینکار
            زمان بر خواهد بود. همچنین طراح به دنبال این است که پس از ارایه کار
            نظر دیگران را در مورد طراحی جویا شود و نمی‌خواهد افراد روی متن های
            موجود تمرکز کنند. از آنجا که لورم ایپسوم، شباهت زیادی به متن های
            واقعی دارد، طراحان معمولا از لورم ایپسوم استفاده میکنند تا فقط به
            مشتری یا کار فرما نشان دهند که قالب طراحی شده بعد از اینکه متن در آن
            قرار میگرد چگونه خواهد بود و فونت ها و اندازه ها چگونه در نظر گرفته
            شده است.
          </p>
        </div>
        <div className="lg:text-16 lg:leading-24 md:text-14 md:leading-24 text-14 leading-24">
          <div className="my-4">
            <h2 className="text-base-yellow mb-[12px] lg:text-24 lg:leading-32 md:text-16 md:leading-24">
              راه های ارتباطی
            </h2>
            <p className="text-white leading-7 text-justify ">
              در صورتی که درمورد اراءه خدمات و یا پشتیبانی پیج های اینستاگرام
              سوالی دارید از طریق راه های زیر با ما تماس بگیرید
            </p>
            <p className="text-white leading-7 text-justify ">
              <span>شماره تلفن:</span>
              <span className="about__phone whitespace-pre inline-block text-end">021-1234 65 78</span>
            </p>
            <p className="text-white leading-7 text-justify ">
              <span>ایمیل:</span>
              <span>academyomidmehrban@gmail.com</span>
            </p>
            <p className="text-white leading-7 text-justify text-[0.8rem] ">
              ساعت کاری: شنبه تا پنجشنبه، ۱۰ صبح الی ۱۴ و ۱۷ الی ۲۲ شب.
            </p>
          </div>
        </div>
        <div className="lg:text-16 lg:leading-24 md:text-14 md:leading-24 text-14 leading-24">
            <h2 className="text-base-yellow my-4 text-16 leading-24 lg:text-24 lg:leading-32 md:text-16 md:leading-24 ">
              ارتباط از طریق تیکت و چت آنلاین
            </h2>
            <p className="text-white leading-7 text-justify">
              جهت درخواست پشتیبانی، و همچنین سوالات درباره ارائه خدمات، از طریق
              تیکت در پنل کاربری با ما در ارتباط باشید.پاسخگویی تیکت ها در تمامی
              ساعات روزهای هفته و در کمترین زمان ممکن انجام می شود.
            </p>
          </div>
        <div className="lg:text-16 lg:leading-24 md:text-14 md:leading-24">
            <h2 className="text-base-yellow text-16 leading-24 my-4  lg:text-24 lg:leading-32 md:text-16 md:leading-24">
              ارتباط از طریق تیکت و چت آنلاین
            </h2>
            <p className="text-white leading-7 text-justify">
              جهت درخواست پشتیبانی، و همچنین سوالات درباره ارائه خدمات، از طریق
              تیکت در پنل کاربری با ما در ارتباط باشید.پاسخگویی تیکت ها در تمامی
              ساعات روزهای هفته و در کمترین زمان ممکن انجام می شود.
            </p>
          </div>
          <div className="lg:text-16 lg:leading-24 md:text-14 md:leading-24 text-14 leading-24">
            <h2 className="text-base-yellow text-16 leading-24 my-4  lg:text-24 lg:leading-32 md:text-16 md:leading-24">
              ارتباط از طریق تیکت و چت آنلاین
            </h2>
            <p className="text-white leading-7 text-justify">
              جهت درخواست پشتیبانی، و همچنین سوالات درباره ارائه خدمات، از طریق
              تیکت در پنل کاربری با ما در ارتباط باشید.پاسخگویی تیکت ها در تمامی
              ساعات روزهای هفته و در کمترین زمان ممکن انجام می شود.
            </p>
          </div>
      </article>
    </section>
  );
}
