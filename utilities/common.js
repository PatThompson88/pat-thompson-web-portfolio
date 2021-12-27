import React, { useState } from 'react';

export const IsCurrentPageName = (pageName) => {
  return useRouter().asPath === `/${pageName}`;
}