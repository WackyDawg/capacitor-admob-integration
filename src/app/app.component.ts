import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {
  AdMob,
  BannerAdOptions,
  BannerAdPosition,
  BannerAdSize,
  BannerAdPluginEvents,
  AdMobBannerSize,
  AdOptions,
  RewardAdOptions,
} from '@capacitor-community/admob';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'capacitor-admob-integration';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeAdMob();
    }
  }

  async initializeAdMob() {
    const { status } = await AdMob.trackingAuthorizationStatus();
    console.log('[AdMob] Tracking status:', status);

    if (status === 'notDetermined') {
      console.warn('[AdMob] Display user consent info before showing ads.');
    }

    await AdMob.initialize({
      testingDevices: ['YOUR_TEST_DEVICE_ID'], // Replace with real test device ID
      initializeForTesting: true,
    });

    AdMob.addListener(BannerAdPluginEvents.Loaded, () => {
      console.log('[AdMob] Banner loaded');
    });

    AdMob.addListener(BannerAdPluginEvents.SizeChanged, (size: AdMobBannerSize) => {
      console.log(`[AdMob] Banner size changed to width=${size.width}, height=${size.height}`);
    });
  }

  async showBanner() {
    if (!isPlatformBrowser(this.platformId)) return;

    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    const adId = isIOS
      ? 'ios-ad-id'
      : 'android-ad-id';

    const options: BannerAdOptions = {
      adId,
      adSize: BannerAdSize.ADAPTIVE_BANNER,
      position: BannerAdPosition.BOTTOM_CENTER,
      margin: 0,
      isTesting: true,
    };

    try {
      await AdMob.showBanner(options);
      console.log('[AdMob] Requested banner ad');
    } catch (error) {
      console.error('[AdMob] Failed to show banner:', error);
    }
  }

  async hideBanner() {
    try {
      await AdMob.hideBanner();
      console.log('[AdMob] Banner hidden');
    } catch (error) {
      console.error('[AdMob] Failed to hide banner:', error);
    }
  }

  async showInterstitial() {
    if (!isPlatformBrowser(this.platformId)) return;

    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    const adId = isIOS
      ? 'ios-ad-id'
      : 'android-ad-id';

    const options: AdOptions = {
      adId,
      isTesting: true,
      // npa: true
    };

    await AdMob.prepareInterstitial(options);
    await AdMob.showInterstitial();
  }

  async showReward() {
    if (!isPlatformBrowser(this.platformId)) return;

    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    const adId = isIOS
      ? 'ios-ad-id'
      : 'android-ad-id';

    const options: RewardAdOptions = {
      adId: adId,
      isTesting: true,
      // npa: true
    };

    await AdMob.prepareRewardVideoAd(options);
    await AdMob.showRewardVideoAd();
  }
}
