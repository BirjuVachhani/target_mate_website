export const APP_NAME = "Target Mate";
export const TWITTER = "https://x.com/BirjuVachhani";
export const LINKEDIN = "https://linkedin.com/in/vachhanibirju";
export const GITHUB = "https://github.com/BirjuVachhani";
export const GITHUB_REPO = "https://github.com/BirjuVachhani/target_mate";
export const GITHUB_ISSUES = "https://github.com/BirjuVachhani/target_mate/issues";
export const WEBSITE = "https://birju.dev";
export const TOGGL = "https://toggl.com";
export const BUY_ME_COFFEE = "https://buymeacoffee.com/birjuvachhani";
export const GITHUB_SPONSERS = "https://github.com/sponsors/BirjuVachhani";

export const APP_VERSION = "0.8.1";

export class DownloadLinks {

  // Android
  static readonly ANDROID_STORE = "https://play.google.com/store/apps/details?id=dev.birju.targetmate";
  static readonly ANDROID_DIRECT = `https://github.com/BirjuVachhani/target_mate_releases/releases/download/${APP_VERSION}/TargetMate-android-${APP_VERSION}.apk`;
  
  // macOS
  static readonly MAC_STORE = "https://apps.apple.com/in/app/target-mate/id6447091819";
  static readonly MAC_DIRECT = `https://github.com/BirjuVachhani/target_mate_releases/releases/download/${APP_VERSION}/TargetMate-macos-${APP_VERSION}.dmg`;
  
  // iOS/iPadOS
  static readonly IOS_STORE = "https://apps.apple.com/in/app/target-mate/id6447091819";
  
  // Windows
  static readonly WINDOWS_DIRECT = `https://github.com/BirjuVachhani/target_mate_releases/releases/download/${APP_VERSION}/TargetMate-windows-${APP_VERSION}.exe`;
}

export const FEATURES = [
  {
    title: "Goals at a glance",
    description: "Quickly view and manage your goals with an intuitive interface, ensuring you stay on track with your time management. Track daily process, finishing time and over time with ease.",
    icon: "Goal",
    image: "/screenshots/goals_tracking_grained.jpeg"
  },
  {
    title: "Set Monthly Goals",
    description: "Customize your working days to account for leaves and holidays. Set monthly hour limits and track your progress with intelligent calculations for daily averages.",
    icon: "Calendar",
    image: "/screenshots/flexible_schedule_grained.jpeg"
  },
  {
    title: "Minimal Context Switching",
    description: "Easily monitor your current progress with intuitive system tray integration, allowing for quick access to your time tracking without disrupting your workflow. Get notified when you achieve your daily & monthly targets.",
    icon: "PersonStanding",
    image: "/screenshots/system_integration_grained.jpeg"
  },
  {
    title: "Comprehensive Project Tracking",
    description: "Effortlessly monitor specific projects or track all activities across your workspace. Enhance your productivity by keeping tabs on every aspect of your work.",
    icon: "Filter",
    image: "/screenshots/filters_grained.jpeg"
  },
  {
    title: "Personalize Your Experience",
    description: "Select from a variety of stunning themes or opt for softer colors to reduce eye strain. Customize sync frequency with Toggl Track and easily switch between workspaces and projects.",
    icon: "Palette",
    image: "/screenshots/customizations_grained.jpeg"
  },
  {
    title: "Real-time Notifications",
    description: "Receive timely notifications to alert you when you achieve your daily and monthly targets, ensuring you never miss a milestone in your productivity journey.",
    icon: "Bell",
    image: "/screenshots/notifications_grained.jpeg"
  },
  {
    title: "Privacy Focused",
    description: "Your data remains entirely yours! We prioritize your privacy with no analytics or data collection—everything is securely stored locally on your device, ensuring complete peace of mind.",
    icon: "Shield",
    image: "/screenshots/privacy_grained.jpeg"
  }
];

export const TESTIMONIALS = [
  {
    name: "Euinor",
    role: "Toggl Track User",
    // company: "Self-employed",
    content: "Tremendous! I tried building a similar analysis with a Make integration into Notion, but it was clunky. This solution is so much better!",
    // avatar: "https://via.placeholder.com/400"
  },
  {
    name: "Sarah",
    role: "Freelancer",
    // company: "Tech Solutions Inc",
    content: "Perfect companion for Toggl Track. Helps me stay on top of monthly hour targets effortlessly.",
    // avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
  },
  {
    name: "Alex",
    role: "Software Engineer",
    // company: "Design Studio",
    content: "The daily limits feature has greatly improved my work-life balance, allowing me to manage my time effectively and avoid burnout.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400"
  }
];