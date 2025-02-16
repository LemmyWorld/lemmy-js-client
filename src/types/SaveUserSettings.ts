// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { LanguageId } from "./LanguageId";
import type { ListingType } from "./ListingType";
import type { PostListingMode } from "./PostListingMode";
import type { SortType } from "./SortType";

export interface SaveUserSettings {
  show_nsfw?: boolean;
  blur_nsfw?: boolean;
  auto_expand?: boolean;
  show_scores?: boolean;
  theme?: string;
  default_sort_type?: SortType;
  default_listing_type?: ListingType;
  interface_language?: string;
  avatar?: string;
  banner?: string;
  display_name?: string;
  email?: string;
  bio?: string;
  matrix_user_id?: string;
  show_avatars?: boolean;
  send_notifications_to_email?: boolean;
  bot_account?: boolean;
  show_bot_accounts?: boolean;
  show_read_posts?: boolean;
  discussion_languages?: Array<LanguageId>;
  open_links_in_new_tab?: boolean;
  infinite_scroll_enabled?: boolean;
  post_listing_mode?: PostListingMode;
  enable_keyboard_navigation?: boolean;
  enable_animated_images?: boolean;
  collapse_bot_comments?: boolean;
}
