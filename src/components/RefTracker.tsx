'use client';

import { useEffect } from 'react';
import { RefParam } from '@/types';
import { trackRefSource } from '@/lib/analytics';

interface RefTrackerProps {
  refParam: RefParam;
}

export default function RefTracker({ refParam }: RefTrackerProps) {
  useEffect(() => {
    if (refParam) {
      trackRefSource(refParam);
    }
  }, [refParam]);

  return null;
}

