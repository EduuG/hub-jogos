import { useMediaQuery } from 'react-responsive';

export const useIsMobile = (customWidth?: number, customHeight?: number) => {
  const widthQuery = customWidth ? `(max-width: ${customWidth}px)` : '(max-width: 768px)';
  const heightQuery = customHeight ? `(max-height: ${customHeight}px)` : '';

  const query = heightQuery ? `${widthQuery} and ${heightQuery}` : widthQuery;

  return useMediaQuery({query});
}