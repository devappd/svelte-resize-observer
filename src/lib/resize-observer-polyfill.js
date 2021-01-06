import { ResizeObserver as Polyfill } from '@juggle/resize-observer';
 
export default ResizeObserver = window.ResizeObserver || Polyfill;
