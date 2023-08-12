// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { CommunityId } from "./CommunityId";
import type { ListingType } from "./ListingType";
import type { SortType } from "./SortType";

export interface GetPosts {
  type_?: ListingType;
  sort?: SortType;
  page?: number;
  limit?: number;
  community_id?: CommunityId;
  community_name?: string;
  saved_only?: boolean;
  liked_only?: boolean;
  disliked_only?: boolean;
  moderator_view?: boolean;
  auth?: string;
}
