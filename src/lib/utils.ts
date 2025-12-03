import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function buildUnsplashSrcSet(url: string) {
  const make = (w: number, q: number) => {
    if (url.includes('w=')) {
      return url.replace(/w=\d+/g, `w=${w}`).replace(/q=\d+/g, `q=${q}`) + ` ${w}w`;
    }
    const sep = url.includes('?') ? '&' : '?';
    return `${url}${sep}w=${w}&q=${q} ${w}w`;
  };
  return [make(480, 70), make(800, 75), make(1200, 80)].join(', ');
}

export const gallerySizes = '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw';
export const halfSizes = '(max-width: 768px) 100vw, 50vw';
