import { useRouter } from 'next/router';

export const IsCurrentPageName = (pageName) => {
  return useRouter().asPath === `/${pageName}`;
}

export const getBaseUrl = () => {
  console.log(useRouter().basePath);
  return useRouter().basePath;
}