import { useRouter } from 'next/router';

export const IsCurrentPageName = (pageName) => {
  return useRouter().asPath === `/${pageName}`;
}

export const getBaseUrl = () => {
  return useRouter().basePath;
}