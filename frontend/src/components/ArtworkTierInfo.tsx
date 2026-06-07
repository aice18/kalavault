import React from 'react';
import { ArtworkTier, PRICING_TIERS } from '../lib/rentalPricing';

interface ArtworkTierBadgeProps {
  tier: ArtworkTier;
  showLabel?: boolean;
  className?: string;
}

interface PricingDetailsProps {
  tier: ArtworkTier;
  monthlyRent: number;
  replacementValue: number;
  compact?: boolean;
}

/**
 * Tier badge component with color coding
 */
export function ArtworkTierBadge({
  tier,
  showLabel = true,
  className = '',
}: ArtworkTierBadgeProps) {
  const tiers: Record<ArtworkTier, { color: string; bg: string; label: string }> = {
    small: { color: 'text-blue-600', bg: 'bg-blue-50 border-blue-200', label: 'Small' },
    medium: { color: 'text-amber-600', bg: 'bg-amber-50 border-amber-200', label: 'Medium' },
    large: { color: 'text-purple-600', bg: 'bg-purple-50 border-purple-200', label: 'Large' },
    'extra-large': {
      color: 'text-red-600',
      bg: 'bg-red-50 border-red-200',
      label: 'Architectural',
    },
  };

  const tierInfo = tiers[tier];

  return (
    <span
      className={`inline-flex items-center px-3 py-1 border rounded-full font-label-caps text-[9px] uppercase tracking-widest ${tierInfo.bg} ${tierInfo.color} ${className}`}
    >
      {showLabel ? tierInfo.label : tier}
    </span>
  );
}

/**
 * Displays pricing information for an artwork tier
 */
export function PricingDetails({
  tier,
  monthlyRent,
  replacementValue,
  compact = false,
}: PricingDetailsProps) {
  const tierInfo = PRICING_TIERS[tier];

  if (compact) {
    return (
      <div className="text-sm">
        <div className="flex justify-between">
          <span className="text-on-surface-variant">Monthly</span>
          <span className="font-semibold text-primary">${Math.round(monthlyRent)}</span>
        </div>
        <div className="flex justify-between text-xs text-on-surface-variant">
          <span>Value Range</span>
          <span>
            ${Math.round(tierInfo.valueRange.min / 1000)}K - ${Math.round(tierInfo.valueRange.max / 1000)}K
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4 p-4 bg-subtle-smoke rounded-lg">
      <div>
        <h4 className="font-label-caps text-[10px] text-on-surface-variant uppercase mb-3">
          Pricing Breakdown
        </h4>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Monthly</span>
            <span className="font-semibold">${Math.round(tierInfo.monthlyRent)}</span>
          </div>
          <div className="flex justify-between">
            <span>Half-Yearly</span>
            <span className="font-semibold">${Math.round(tierInfo.halfYearlyRent)}</span>
          </div>
          <div className="flex justify-between">
            <span>Quarterly</span>
            <span className="font-semibold">${Math.round(tierInfo.quarterlyRent)}</span>
          </div>
          <div className="flex justify-between border-t pt-2">
            <span>Yearly</span>
            <span className="font-semibold">${Math.round(tierInfo.yearlyRent)}</span>
          </div>
        </div>
      </div>

      <div className="pt-2 border-t">
        <p className="text-xs text-on-surface-variant">
          <strong>Artwork Value:</strong> ${replacementValue.toLocaleString()}
        </p>
        <p className="text-xs text-on-surface-variant mt-1">
          <strong>Tier Range:</strong> ${Math.round(tierInfo.valueRange.min / 1000)}K - $
          {Math.round(tierInfo.valueRange.max / 1000)}K
        </p>
      </div>
    </div>
  );
}

/**
 * Quick stats widget for collections view
 */
export function ArtworkStats({
  tier,
  monthlyRent,
  replacementValue,
}: PricingDetailsProps) {
  const tierInfo = PRICING_TIERS[tier];

  return (
    <div className="grid grid-cols-3 gap-3 p-3 bg-paper-white rounded-lg border border-outline/10">
      <div>
        <p className="text-[9px] text-on-surface-variant uppercase tracking-widest mb-1">
          Monthly
        </p>
        <p className="font-display-md text-lg text-primary">${Math.round(monthlyRent)}</p>
      </div>
      <div>
        <p className="text-[9px] text-on-surface-variant uppercase tracking-widest mb-1">Yearly</p>
        <p className="font-display-md text-lg text-primary">
          ${Math.round(tierInfo.yearlyRent / 1000)}K
        </p>
      </div>
      <div>
        <p className="text-[9px] text-on-surface-variant uppercase tracking-widest mb-1">Tier</p>
        <ArtworkTierBadge tier={tier} showLabel={true} className="mt-1" />
      </div>
    </div>
  );
}
