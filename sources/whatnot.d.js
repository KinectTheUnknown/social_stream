//#region TS Utility Types
/**
 * Converts a union of values into a union of tuples, where each tuple contains the union member and a function that accepts only that member.
 * @template T
 * @typedef {(T extends unknown ? (arg: T) => void : never) extends ((arg: infer I) => void) ? I : never} UnionToIntersection
 */

/**
 * Helper to safely extract property type from a union of objects.
 * @template U
 * @template K
 * @typedef { U extends unknown ? (K extends keyof U ? U[K] : undefined) : never } GetPropertyType
 */

/**
 * Helper to check if a property is optional or missing in any member of a union.
 * @template U
 * @template K
 * @typedef { [true] extends [U extends unknown ? ({} extends Pick<U, Extract<K, keyof U>> ? true : never) : never] ? true : false } IsOptional
 */

/**
 * Helper to get only plain object types from a union.
 * @template T
 * @typedef { Exclude<Extract<T, object>, Array<any> | Function> } CleanObjectUnion
 */

/**
 * Intersects properties of a union of objects into a single object, working deeply and unionizing any primitive types.
 * @template T
 * @typedef { Extract<T, string | number | boolean | symbol | bigint | null | undefined>
 *            | (Extract<T, Array<any>> extends never ? never : Array<IntersectObjectUnion<Extract<T, Array<any>> extends Array<infer U> ? U : never>>)
 *            | Extract<T, Function>
 *            | ([CleanObjectUnion<T>] extends [never] ? never : ({
 *                [K in keyof UnionToIntersection<CleanObjectUnion<T>> as string extends K ? never : number extends K ? never : symbol extends K ? never : (IsOptional<CleanObjectUnion<T>, K> extends false ? K : never)]: IntersectObjectUnion<GetPropertyType<CleanObjectUnion<T>, K>>
 *              } & {
 *                [K in keyof UnionToIntersection<CleanObjectUnion<T>> as string extends K ? never : number extends K ? never : symbol extends K ? never : (IsOptional<CleanObjectUnion<T>, K> extends true ? K : never)]?: IntersectObjectUnion<GetPropertyType<CleanObjectUnion<T>, K>>
 *              }))
 * } IntersectObjectUnion
 */

/**
 * @template {string} S
 * @typedef {S extends `${infer Head}_${infer Tail}` ? `${Capitalize<Lowercase<Head>>} ${ScreamingSnakeToTitleCase<Tail>}` : Capitalize<Lowercase<S>>} ScreamingSnakeToTitleCase
 */

//#endregion
//#region SSN Types
/**
 * @typedef {BadgeDescriptorSVG | BadgeDescriptorImg} BadgeDescriptor
 */

/**
 * @typedef {Object} BadgeDescriptorSVG
 * @prop {"svg"} type Indicates that the badge is provided as raw SVG markup.
 * @prop {string} [text]
 * @prop {string} html The raw SVG markup to be rendered directly in the overlay.
 */

/**
 * @typedef {Object} BadgeDescriptorImg
 * @prop {"img"} type Indicates that the badge is provided as an image URL.
 * @prop {string} [text]
 * @prop {string} src The URL of the badge image.
 */


/**
 * @typedef {Object} SourceEventData
 * @prop {string} chatname Display name that will be rendered in overlays.
 * @prop {(string | BadgeDescriptor)[]} [chatbadges=[]] Badge icons shown beside the author. Strings are image URLs; `BadgeDescriptor` objects can include `{ type, text, src }` for richer badges.
 * @prop {string} [backgroundColor] Overrides the background color for highlighted message cards.
 * @prop {string} [textColor] Overrides the rendered message text color.
 * @prop {string} [nameColor] Overrides the rendered display-name color.
 * @prop {string} [chatmessage] Message body; can contain sanitized HTML/emote markup when `textonly` is false.
 * @prop {string} [chatimg] Author avatar. Absolute URLs preferred; legacy data URIs remain supported.
 * @prop {string} [backupChatimg] Fallback avatar if `chatimg` fails to load.
 * @prop {string} [hasDonation] Donation amount with units, e.g., "3 roses" or "$50 USD".
 * @prop {number} [donoValue] Numeric donation value in standard currency units (e.g., `5` for $5.00), used for integrations that consume raw donation totals.
 * @prop {string} [membership] Short description of a membership/subscription state or label (e.g., "Member" or "Tier 3 Upgrade").
 * @prop {string} [contentimg] Optional media attachment for the message (image/gif/mp4/webm).
 * @prop {string} type Primary source identifier such as `twitch`, `youtube`, `kick`.
 * @prop {string|false} [event=false] Identifies structured events ("follow", "raid", etc.) or false/omitted when the message is standard chat.
 * @prop {string} [sourceImg] Optional alternate icon representing a sub-source (ex: channel avatar, Restream origin).
 * @prop {string} [sourceName] Channel title, profile name, or host identifier associated with the source feed.
 * @prop {boolean} [textonly] Indicates whether `chatmessage` should be treated as plain text (`true`) or may contain markup (`false`).
 * @prop {string} [title] Display title for donations or other highlighted events.
 * @prop {string} [subtitle] Additional detail for memberships or donations.
 * @prop {boolean} [moderator] Marks the author as a moderator for the source platform.
 * @prop {boolean} [admin] Flags elevated/privileged accounts.
 * @prop {boolean} [bot] Flags automated or host-generated messages.
 * @prop {boolean} [question] Indicates the message has been classified as a question.
 * @prop {string} [userid] Stable user identifier from the source platform.
 * @prop {number} [karma] Sentiment score; `1.0` positive, `0.0` negative. Provided by AI heuristics when available.
 * @prop {number} [id] Internal message identifier assigned by SSN for de-duplication/routing.
 * @prop {boolean} [private] Marks direct/private messages that should not be surfaced publicly by default.
 * @prop {Record<string, any>} [meta] Extra structured data that doesn't fit elsewhere (viewer counts, membership details, `eventTypeMapping`, etc.).
 */
/**
 * @typedef {Object} ExtensionSettings
 * @prop {boolean} [bttv] - Whether BTTV emotes are enabled.
 * @prop {boolean} [seventv] - Whether 7TV emotes are enabled.
 * @prop {boolean} [ffz] - Whether FFZ emotes are enabled.
 * @prop {boolean} [delayyoutube] - Whether to delay YouTube capture.
 * @prop {boolean} [youtubeLargerFont] - Whether to apply a larger font on YouTube.
 * @prop {boolean} [textonlymode] - Whether text-only mode is enabled.
 * @prop {boolean} [captureevents] - Whether to capture events.
 * @prop {boolean} [capturejoinedevent] - Whether to capture joined events.
 * @prop {boolean} [showviewercount] - Whether to capture view counts
 * @prop {boolean} [hypemode] Whether to capture hype events such as new viewers and raiders
 */
/**
 * @typedef {Object} GetSettingsResponse
 * @prop {boolean} state - The current on/off state of the extension.
 * @prop {string} [streamID] - The stream ID for WebRTC/transport connection.
 * @prop {string} [password] - The password for WebRTC/transport connection.
 * @prop {ExtensionSettings} [settings] - The current configuration settings of the extension.
 * @prop {any} [documents] - RAG documents if generated/available.
 * @prop {any} [handleStatus] - A snapshot of current UI/handle states.
 */

//#endregion
//#region Outgoing Event Types
/**
 * @typedef {IntersectObjectUnion<WhatnotEvents[keyof WhatnotEvents]>} AllWhatnotPayload
 */
/**
 * @typedef {Object} WhatnotMeta
 * @prop {"websocket"} transport
 * @prop {string} websocketEvent
 * @prop {string} [topic]
 * @prop {string} [messageId]
 * @prop {string} [messageType]
 * @prop {string} [activityEvent]
 * @prop {number} [timestamp]
 * @prop {string} [livestreamId]
 * @prop {Array<{id: string, username: string}>} [taggedUsers]
 * @prop {number} [daysSinceCreated]
 * @prop {string} [profile]
 * @prop {boolean} [host]
 * @prop {boolean} [cohost]
 * @prop {boolean} [topBuyer]
 * @prop {boolean} [newUser]
 * @prop {boolean} [booster]
 * @prop {boolean} [boost]
 * @prop {string} [contributionMessage]
 * @prop {string} [currency]
 * @prop {boolean} [announcement]
 * @prop {NewMessagePayload["properties"]} [properties]
 * @prop {User} [fromUser] The User object for the host initiating the raid
 * @prop {User} [toUser] The User object of the host that the stream will raid into
 * @prop {Partial<Livestream> & { id: string }} [livestreamToRaid]
 * @prop {string} [fromId] The id of the host initiating the raid
 * @prop {string} [fromLogin] The username of the host initiating the raid
 * @prop {number} [viewers] The number of viewers that will be part of the raid
 * @prop {"start" | "end" | "sold" | "bid" | "pin" | "unpin" | "create" | "delete"} [action]
 * @prop {"winning" | "won" | "sold" | ""} [status]
 * @prop {string} [statusText]
 * @prop {string} [bidder]
 * @prop {boolean} [successful]
 * @prop {"overtaken_by_max_bid" | "bid_lower_than_current_price" | "increment_not_met" | string} [reason]
 * @prop {string} [overtakenBy]
 * @prop {number} [price] Price/bid in cents
 * @prop {string} [priceText] Formatted price
 * @prop {string} [title] Product/item name
 * @prop {string} [productId]
 * @prop {Product} [product] Raw product object
 */

//#endregion
//#region Utility Types

/**
 * @template {string} EventName
 * @template Payload
 * @typedef {[increment: number, topic: string, ref: string, event: EventName, payload: Payload]} PhoenixWSData
 */

/**
 * @typedef {{
 *   [K in keyof WhatnotEvents] : PhoenixWSData<K, WhatnotEvents[K]>
 * }[keyof WhatnotEvents]} WhatnotWSReceiveData
 */

/**
 * @typedef {Object} WhatnotEvents
 * @prop {AuctionEndedPayload} auction_ended
 * @prop {AuctionStartedPayload} auction_started
 * @prop {BreakUpdatedPayload} break_updated
 * @prop {GiveawayEnteredPayload} giveaway_entered
 * @prop {GiveawayEntryCountUpdatedPayload} giveaway_entry_count_updated
 * @prop {GiveawayStartedPayload} giveaway_started
 * @prop {GiveawayWonPayload} giveaway_won
 * @prop {HasBeenRaidedPayload} has_been_raided
 * @prop {HostsAndModsPresentInLivestream} hosts_and_mods_present_in_livestream
 * @prop {Livestream} livestream_update
 * @prop {LivestreamViewCountUpdated} livestream_view_count_updated
 * @prop {NewBidPayload} new_bid
 * @prop {NewMessagePayload} new_msg
 * @prop {PaymentFailedPayload} payment_failed
 * @prop {PaymentSucceededPayload} payment_succeeded
 * @prop {PollUpdatedPayload} poll_updated
 * @prop {ProductAddedPayload} product_created
 * @prop {ProductDeletedPayload} product_deleted
 * @prop {ProductPinnedPayload} product_pinned
 * @prop {ProductSoldPayload} product_sold
 * @prop {ProductUnpinnedPayload} product_unpinned
 * @prop {ProductUpdatedPayload} product_updated
 * @prop {RaidCancelledPayload} raid_cancelled
 * @prop {RaidSelectedPayload} raid_selected
 * @prop {RaidStartedPayload} raid_started
 * @prop {RaidUpdatedPayload} raid_updated
 * @prop {RandomizerResultPayload} randomizer_result
 * @prop {TipSentPayload} tip_sent
 * @prop {TopBuyersPresentInLivestream} top_buyers_present_in_livestream
 * @prop {UserJoinedPayload} user_joined
 * @prop {UserLoyaltyTierLevelUpPayload} user_loyalty_tier_level_up
 * @prop {PresenceDiffPayload} presence_diff
 * @prop {{}} phx_close
 * @prop {PhxReplyPayload} phx_reply
 */
//#endregion
//#region Whatnot Types

/**
 * @typedef {Object} Unknown
 */

/**
 * @typedef {"CREATED" | "PLAYING" | "ENDED" | "STOPPED" | "CANCELLED"} LiveStreamStatus
 */

/**
 * @typedef {"ACTIVE" | "INACTIVE" | "SOLD"} ListingStatus
 */

/**
 * @typedef {"RANDOM" | "MYSTERY"} BreakFormat
 */

/**
 * @typedef {"TEAM" | "CUSTOM"} BreakSpotType
 */

/**
 * @typedef {"image" | "video"} ProductMediaType
 */

/**
 * @typedef {"AUCTION" | "BUY_IT_NOW" | "GIVEAWAY"} ProductTransactionType
 */

/**
 * @typedef {"T1_FIRE_JUMBOTRON" | "T2_FIRE_JUMBOTRON" | "T3_UFO_JUMBOTRON" | "T3_MOON_JUMBOTRON"} JumbotronType
 */

/**
 * @typedef {"NO_TIER" | "BRONZE" | "SILVER" | "GOLD" | "PLATINUM" | "DIAMOND"} LoyaltyTier
 */

/**
 * @typedef {"PROMOTE" | "BOOST_V2" | "UNKNOWN"} AdToolType
 */

/**
 * @typedef {"AED" | "AFN" | "ALL" | "AMD" | "ANG" | "AOA" | "ARS" | "AUD" | "AWG" | "AZN" | "BAM" | "BBD" | "BDT" | "BGN" | "BHD" | "BIF" | "BMD" | "BND" | "BOB" | "BOV" | "BRL" | "BSD" | "BTN" | "BWP" | "BYR" | "BYN" | "BZD" | "CAD" | "CDF" | "CHE" | "CHF" | "CHW" | "CLF" | "CLP" | "CNY" | "COP" | "COU" | "CRC" | "CUC" | "CUP" | "CVE" | "CZK" | "DJF" | "DKK" | "DOP" | "DZD" | "EGP" | "ERN" | "ETB" | "EUR" | "FJD" | "FKP" | "GBP" | "GEL" | "GHS" | "GIP" | "GMD" | "GNF" | "GTQ" | "GYD" | "HKD" | "HNL" | "HRK" | "HTG" | "HUF" | "IDR" | "ILS" | "INR" | "IQD" | "IRR" | "ISK" | "JMD" | "JOD" | "JPY" | "KES" | "KGS" | "KHR" | "KMF" | "KPW" | "KRW" | "KWD" | "KYD" | "KZT" | "LAK" | "LBP" | "LKR" | "LRD" | "LSL" | "LTL" | "LVL" | "LYD" | "MAD" | "MDL" | "MGA" | "MKD" | "MMK" | "MNT" | "MOP" | "MRO" | "MUR" | "MVR" | "MWK" | "MXN" | "MXV" | "MYR" | "MZN" | "NAD" | "NGN" | "NIO" | "NOK" | "NPR" | "NZD" | "OMR" | "PAB" | "PEN" | "PGK" | "PHP" | "PKR" | "PLN" | "PYG" | "QAR" | "RON" | "RSD" | "RUB" | "RWF" | "SAR" | "SBD" | "SCR" | "SDG" | "SEK" | "SGD" | "SHP" | "SLL" | "SOS" | "SRD" | "SSP" | "STD" | "SVC" | "SYP" | "SZL" | "THB" | "TJS" | "TMT" | "TND" | "TOP" | "TRY" | "TTD" | "TWD" | "TZS" | "UAH" | "UGX" | "USD" | "USN" | "USS" | "UYI" | "UYU" | "UZS" | "VEF" | "VND" | "VUV" | "WST" | "XAF" | "XAG" | "XAU" | "XBA" | "XBB" | "XBC" | "XBD" | "XCD" | "XDR" | "XFU" | "XOF" | "XPD" | "XPF" | "XPT" | "XSU" | "XTS" | "XUA" | "YER" | "ZAR" | "ZMW" | "ZWL"} CurrencyCode
 */

/**
 * @typedef {Object} PaymentSucceededPayload
 * @property {string} [couponCode]
 * @property {Product} product
 */

/**
 * @typedef {Object} PaymentFailedPayload
 * @property {string} [placeOrderErrorReason]
 * @property {Product} [product]
 */

/**
 * @typedef {Object} Product
 * @property {Money} [askingPrice]
 * @property {number} [askingPriceCents]
 * @property {number} [auctionEndTime]
 * @property {boolean} [auctionIncrementEndTime]
 * @property {number} [auctionMinimumCents]
 * @property {Money} [auctionMinimumPrice]
 * @property {boolean} [awaitingDeferredPayment]
 * @property {number} bidCount
 * @property {ProductBreakInfo} [breakInfo]
 * @property {number} [bumpThresholdSeconds]
 * @property {number} [bumpValueSeconds]
 * @property {Object} [compareAtPrice]
 * @property {string} [description]
 * @property {User} [giftRecipientUser]
 * @property {ProductGiveaway} [giveaway]
 * @property {boolean} [hasVariants]
 * @property {ProductHighestBid} [highestBid]
 * @property {string} id
 * @property {boolean} [isAuction]
 * @property {boolean} [isAuctionActive]
 * @property {boolean} [isBreak]
 * @property {boolean} [isBreakSpot]
 * @property {boolean} [isDutchAuction]
 * @property {boolean} [isGradable]
 * @property {boolean} [isOfferable]
 * @property {boolean} [isPresale]
 * @property {boolean} [isSuddenDeath]
 * @property {string} listingId
 * @property {string} listingNodeId
 * @property {string} livestreamId
 * @property {ProductMedia[]} [media]
 * @property {string} name
 * @property {number} [nextBidCents]
 * @property {Money} [nextBidPrice]
 * @property {Object} [nft]
 * @property {Object} [nftType]
 * @property {string} [orderId]
 * @property {string} [orderShippingQuoteToken]
 * @property {string} [parentId]
 * @property {string} [paymentErrorMessage]
 * @property {number} [paymentFailed]
 * @property {string} [paymentId]
 * @property {boolean} [pendingPayment]
 * @property {string} [placeOrderErrorReason]
 * @property {string} productId
 * @property {string} [productSubtitle]
 * @property {User} [purchaserUser]
 * @property {string} [purchaserUserAgent]
 * @property {ProductQuantity} quantity
 * @property {string} [sellerUserId]
 * @property {Money} [soldPrice]
 * @property {number} [soldPriceCents]
 * @property {ListingStatus} status
 * @property {string} subtitle
 * @property {string} [timedEvent]
 * @property {number} timestamp
 * @property {ProductTransactionType} transactionType
 * @property {string[]} [uniqueItemIds]
 */

/**
 * @typedef {Object} ProductBreakInfo
 * @property {BreakFormat} [breakFormat]
 * @property {number} breakId
 * @property {number} [breakSpotId]
 */

/**
 * @typedef {Object} ProductMedia
 * @property {string} bucket
 * @property {string} id
 * @property {string} key
 * @property {ProductMediaType} type
 */

/**
 * @typedef {Object} ProductGiveaway
 * @property {boolean} buyerAppreciation
 * @property {string} [buyerAppreciationRules]
 * @property {number} [giveawayEndtime]
 * @property {boolean} onlyDomestic
 * @property {boolean} onlyTriviaWinners
 * @property {string} [triviaId]
 */

/**
 * @typedef {Object} ProductHighestBid
 * @property {string} [adCampaignId]
 * @property {string} id
 * @property {boolean} isDeleted
 * @property {string} [listingId]
 * @property {string} [livestreamId]
 * @property {Money} price
 * @property {number} priceCents
 * @property {string} [productId]
 * @property {string} [shippingQuoteToken]
 * @property {number} timestamp
 * @property {User} user
 * @property {string} userAgent
 * @property {string} userId
 * @property {boolean} validatePotentialTrollBid
 */

/**
 * @typedef {Object} ProductUser
 * @property {number} daysSinceCreated
 * @property {string} id
 * @property {boolean} isCohost
 * @property {boolean} isEmployee
 * @property {boolean} isHost
 * @property {boolean} isModerator
 * @property {boolean} isNewUser
 * @property {boolean} isNominatedModerator
 * @property {boolean} isTopBuyer
 * @property {boolean} loyaltyVisibilityStatusEnabled
 * @property {Image} [profileImage]
 * @property {string} username
 */

/**
 * @typedef {Object} Image
 * @property {string} id
 * @property {string} key
 * @property {string} url
 */

/**
 * @typedef {Object} ProductQuantity
 * @property {number} [remaining]
 * @property {number} [sold]
 * @property {number} [total]
 */

/**
 * @typedef {Object} Money
 * @property {CurrencyCode} currency
 * @property {number} amount
 */

/**
 * @typedef {"announcement"} MessageType
 */

/**
 * @typedef {Object} NewMessagePayload
 * @property {MessageType?} [type]
 * @property {string} id
 * @property {"returning_buyer" | "new_buyer"} buyerBadge
 * @property {boolean} [isComment]
 * @property {string} message
 * @property {boolean} [muted]
 * @property {Record<string, any>} properties
 * @property {NewMessageTaggedUser[]} [taggedUsers]
 * @property {string} topic
 * @property {NewMessageUser} user
 */

/**
 * @typedef {Object} NewMessageProperties
 * @prop {ChatEffect} chatEffect
 */

/**
 * @typedef {Object} ChatEffect
 * @prop {"CHAT_flame"} type
 */

/**
 * @typedef {Object} NewMessageUser
 * @property {number} daysSinceCreated
 * @property {string} id
 * @property {boolean} isBooster
 * @property {boolean} isCohost
 * @property {boolean} isEmployee
 * @property {boolean} isHost
 * @property {boolean} isModerator
 * @property {boolean} isNewUser
 * @property {boolean} isNominatedModerator
 * @property {boolean} isTopBuyer
 * @property {JumbotronType} [jumbotronType]
 * @property {LoyaltyTier} loyaltyTierForSeller
 * @property {boolean} loyaltyVisibilityStatusEnabled
 * @property {Image} [profileImage]
 * @property {string} username
 */

/**
 * @typedef {Object} NewMessageTaggedUser
 * @property {string} id
 * @property {string} username
 */

/**
 * @typedef {Object} User
 * @property {number} daysSinceCreated
 * @property {string} id
 * @property {boolean} isCohost
 * @property {boolean} isEmployee
 * @property {boolean} isHost
 * @property {boolean} isModerator
 * @property {boolean} isNewUser
 * @property {boolean} isNominatedModerator
 * @property {boolean} isTopBuyer
 * @property {boolean} loyaltyVisibilityStatusEnabled
 * @property {Image} [profileImage]
 * @property {string} username
 */

/**
 * @typedef {Object} AuctionStartedPayload
 * @property {Product} product
 */

/**
 * @typedef {Object} ProductUpdatedPayload
 * @property {Product} product
 */

/**
 * @typedef {Object} ProductAddedPayload
 * @property {Product} product
 */

/**
 * @typedef {Object} ProductDeletedPayload
 * @property {Product} product
 * @property {string} productId
 */

/**
 * @typedef {Object} ProductSoldPayload
 * @property {string} [couponCode]
 * @property {Product} product
 */

/**
 * @typedef {Object} ProductPinnedPayload
 * @property {string} id
 * @property {LivestreamShippingInfo} [livestreamShippingInfo]
 * @property {string} [pinType]
 * @property {Product} product
 * @property {Object} [shippingQuote]
 * @property {ShippingQuoteRequestBehavior} shippingQuoteRequestBehavior
 */

/**
 * @typedef {Object} ProductUnpinnedPayload
 * @property {string} [id]
 * @property {Product} product
 * @property {string} reason
 */

/**
 * @typedef {Object} AuctionEndedPayload
 * @property {boolean} is_first_time_buyer
 * @property {boolean} is_seller_referral
 * @property {boolean} use_reward_balance
 * @property {Product} product
 */

/**
 * @typedef {Object} GiveawayStartedPayload
 * @property {GiveawayDetails} giveaway
 * @property {string} [id]
 * @property {Product} product
 */

/**
 * @typedef {Object} GiveawayDetails
 * @property {number} entryCount
 * @property {string} productId
 */

/**
 * @typedef {Object} GiveawayEnteredPayload
 * @property {GiveawayDetails} giveaway
 * @property {GiveawayInfo} giveaway_info
 * @property {boolean} isUserEligibleForGiveaway
 * @property {boolean} isUserInGiveaway
 */

/**
 * @typedef {Object} GiveawayInfo
 * @property {boolean} [buyer_appreciation]
 * @property {string} giveaway_id
 * @property {string} livestream_id
 * @property {boolean} only_domestic
 * @property {boolean} only_followers
 * @property {boolean} only_trivia_winners
 * @property {number} timestamp
 * @property {string} [trivia_id]
 */

/**
 * @typedef {Object} GiveawayEntryCountUpdatedPayload
 * @property {number} [entryCount]
 * @property {string} [productId]
 */

/**
 * @typedef {Object} GiveawayWonPayload
 * @property {GiveawayDetails} giveaway
 * @property {string[]} giveawayEntries
 * @property {Product} product
 */

/**
 * @typedef {Object} UserLoyaltyTierLevelUpPayload
 * @property {NewMessageUser} user
 */

/**
 * @typedef {Object} HasBeenRaidedPayload
 * @property {User} fromUser
 * @property {number} numRaiders
 */

/**
 * @typedef {Object} RaidSelectedPayload
 * @property {User} fromUser
 * @property {Livestream} livestreamToRaid
 * @property {number} numRaiders
 * @property {User} toUser
 */

/**
 * @typedef {Object} RaidUpdatedPayload
 * @property {number} numRaiders
 */

/**
 * @typedef {Object} RaidStartedPayload
 * @property {number} numUsers
 * @property {User} fromUser
 * @property {string} livestreamToRaid
 */

/**
 * @typedef {Record<string, never>} RaidCancelledPayload
 */

/**
 * @typedef {Object} TipSentPayload
 * @property {TipDetails} tip
 */

/**
 * @typedef {Object} TipDetails
 * @property {number} magnitude
 * @property {string} [message]
 * @property {User} senderUser
 * @property {Money} [tipValue]
 */

/**
 * @typedef {Object} BreakUpdatedPayload
 * @property {string} default_transaction_type
 * @property {string} description
 * @property {number} filled_break_spots
 * @property {string} format
 * @property {string} [id]
 * @property {string} listing_id
 * @property {string} livestream_id
 * @property {number} seller_user_id
 * @property {BreakSpotOption[]} spot_options
 * @property {BreakSpot[]} spots
 * @property {BreakSpotType} spot_type
 * @property {string} status
 * @property {string} title
 * @property {number} total_break_spots
 */

/**
 * @typedef {Object} RandomizerResultPayload
 * @property {string} buyer_username
 * @property {string[]} entrants
 * @property {string[]} [results]
 */

/**
 * @typedef {Object} PollUpdatedPayload
 * @property {Record<string, any>} choices
 * @property {string} id
 * @property {number} livestream_start_time
 * @property {string} question
 * @property {string} status
 * @property {Record<string, any>} votes
 */

/**
 * @typedef {Object} NewBidPayload
 * @property {ProductHighestBid} [bidOvertakenByMaxBid]
 * @property {string} [eventMessageId]
 * @property {User} highestBidder
 * @property {boolean} [pinProduct]
 * @property {Product} product
 * @property {number} timestamp
 */

/**
 * @typedef {Object} UserJoinedPayload
 * @property {ActiveGiveaway} [activeGiveaway]
 * @property {Record<string, any>} [activeTrivia]
 * @property {number} [averageShipDays]
 * @property {BuyerQualifications} buyerQualifications
 * @property {LivestreamConstants} constants
 * @property {Livestream} livestream
 * @property {Product} [pinnedProduct]
 * @property {Object} [shippingQuote]
 * @property {ShippingQuoteRequestBehavior} [shippingQuoteRequestBehavior]
 * @property {string} username
 * @property {boolean} viewOnly
 */

/**
 * @typedef {Object} BuyerQualifications
 * @property {boolean} identityVerified
 * @property {boolean} [preauthorizationVerified]
 * @property {boolean} qualifiedBuyer
 * @property {Money} [requiredPreauthAmount]
 * @property {boolean} transactionVerified
 */

/**
 * @typedef {Object} MinimumCustomBidIncrementData
 * @property {number} increment_cents
 * @property {number} price_cents_floor
 */

/**
 * @typedef {Object} LivestreamConstants
 * @property {number} maxChatCharacterLimit
 * @property {number} maxProductQuantityLimit
 * @property {MinimumCustomBidIncrementData[]} minimumCustomBidIncrementData
 */

/**
 * @typedef {Object} TippingPreferences
 * @property {string} prompt
 * @property {boolean} showMessagesInChat
 */

/**
 * @typedef {Object} ChatPreferences
 * @property {number} slowModeTimeSeconds
 */

/**
 * @typedef {Object} LivestreamThumbnail
 * @property {string} filename
 * @property {number} id
 * @property {string} path
 */

/**
 * @typedef {(
 *   | ({ livestreamShippingSettingsKey: string } & (
 *       | {usDomesticShippingCostSetting: "buyer_pays_all" | "seller_offers_free_shipping"}
 *       | {usDomesticShippingCostSetting: "buyer_pays_max_amount", usDomesticBuyerPaysMaxAmountCurrency: CurrencyCode, usDomesticBuyerPaysMaxAmountCents: number}
 *     ))
 *   | {usDomesticShippingCostSetting: any, livestream_shipping_settings_key: string}
 * )} LivestreamShippingInfo
 */

/**
 * @typedef {Object} Livestream
 * @property {string} [activeGiveawayLiveProductId]
 * @property {string} [activePromotionType]
 * @property {string} [activeTriviaId]
 * @property {number} activeViewers
 * @property {boolean} buyersCanBidWithoutPayment
 * @property {boolean} captionsEnabled
 * @property {string[]} categories
 * @property {ChatPreferences} chatPreferences
 * @property {string} countryCode
 * @property {string} [dataUrl]
 * @property {string} [description]
 * @property {boolean} displayAdPillForBuyers
 * @property {string} [dynamicThumbnail]
 * @property {string[]} [eligibleLoyaltyTiers]
 * @property {number} [endTime]
 * @property {boolean} explicitContent
 * @property {boolean} featured
 * @property {boolean} giveawaysRunInParallelEnabled
 * @property {string[]} hashtags
 * @property {boolean} hasMulticastError
 * @property {string} hostUsername
 * @property {string} id
 * @property {string[]} inferredCategories
 * @property {string[]} inferredCategoriesBlacklist
 * @property {string[]} inferredCategoriesWhitelist
 * @property {string[]} inferredTags
 * @property {string[]} inferredTagsBlacklist
 * @property {string[]} inferredTagsWhitelist
 * @property {boolean} invitedUserAccepted
 * @property {string} [invitedUserId]
 * @property {boolean} [isBigInfluencerStream]
 * @property {boolean} isHiddenBySeller
 * @property {boolean} isPromoted
 * @property {boolean} isRecurringLive
 * @property {boolean} isShowNotePublished
 * @property {boolean} isSponsored
 * @property {string} [liveType]
 * @property {number} [maxBidCap]
 * @property {string[]} moderators
 * @property {string[]} nominatedModerators
 * @property {string} [pinnedAsyncAuctionLivestreamId]
 * @property {string} [pinnedProductId]
 * @property {string} [pinnedProductType]
 * @property {string} [pinnedVariantId]
 * @property {boolean} prebidsDisabled
 * @property {string} [recurringScheduleId]
 * @property {boolean} requireQualifiedBuyer
 * @property {string} [rtmpUrl]
 * @property {CurrencyCode} sellerCurrency
 * @property {string} [sellerLanguage]
 * @property {number} shareCounts
 * @property {LivestreamShippingInfo} [shippingInfo]
 * @property {LivestreamShopState} [shopState]
 * @property {number} startTime
 * @property {LiveStreamStatus} status
 * @property {number} statusUpdatedAt
 * @property {string} [streamId]
 * @property {string[]} tags
 * @property {LivestreamThumbnail} [thumbnail]
 * @property {number} timestamp
 * @property {TippingPreferences} tippingPreferences
 * @property {string} title
 * @property {string[]} topBuyerIds
 * @property {string} [trailerAssetId]
 * @property {string} [trailerThumbnailUrl]
 * @property {string} [trailerUploadId]
 * @property {string} [trailerUrl]
 * @property {string?} userDeviceId
 * @property {string} userId
 * @property {boolean} vodsIsHiddenBySeller
 * @property {boolean} vodsIsHiddenForAllUsers
 */

/**
 * @typedef {Object} ActiveGiveaway
 * @property {number} entryCount
 * @property {boolean} isUserEligibleForGiveaway
 * @property {boolean} isUserInGiveaway
 * @property {Product} product
 * @property {string} productId
 */

/**
 * @typedef {Object} ShippingQuoteRequestBehavior
 * @property {string} behavior
 * @property {boolean} invalidateCached
 * @property {string} listingIdToFetch
 */

/**
 * @typedef {Object} LivestreamViewCountUpdated
 * @property {number} viewCount
 */

/**
 * @typedef {Object} TopBuyersPresentInLivestream
 * @property {string} livestreamId
 * @property {{user: User}[]} topBuyersPresentInLivestream
 */

/**
 * @typedef {Object} HostsAndModsPresentInLivestream
 * @property {{user: User}[]} hostsAndModsPresentInLivestream
 */

/**
 * @typedef {({totalCount: string} | {total_count: string})} LivestreamShopState
 */

/**
 * @typedef {Object} BreakSpotOption
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {boolean} available
 * @property {Record<string, any>} assignedBreakSpot
 * @property {Record<string, any>} colors
 */

/**
 * @typedef {Object} BreakSpot
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {Record<string, any>} listing
 */

/**
 * @typedef {Object} PhxReplyPayload
 * @property {string} status
 * @property {Record<string, any>} response
 */

/**
 * @typedef {Object} PhxReplyPayloadResponse
 * @property {Livestream} [livestream]
 * @property {Unknown[]} latestLiveActivityEvents
 */

/**
 * @typedef {Object} LatestMessagesPayload
 * @property {NewMessagePayload[]} messages
 */

/**
 * @typedef {Object} PresenceDiffPayload
 * @property {Record<string, PresenceDiffPayloadInner?>} joins
 * @property {Record<string, PresenceDiffPayloadInner?>} leaves
 */

/**
 * @typedef {Object} PresenceDiffPayloadInner
 * @property {PresenceDiffPayloadMeta[]} metas
 */

/**
 * @typedef {Object} PresenceDiffPayloadMeta
 * @property {PresenceDiffUser} user
 * @property {string} phx_ref
 * @property {number} online_at_ms
 * @property {PresenceDiffPayloadJoinedFrom} [joined_from]
 * @property {string} online_at
 */

/**
 * @typedef {Object} PresenceDiffPayloadJoinedFrom
 * @property {{adToolType: AdToolType}} [ad]
 * @property {Unknown} [isSenderMe]
 * @property {string} [senderId]
 * @property {string} [senderUsername]
 */

/**
 * @typedef {Object} PresenceDiffUser
 * @property {number} daysSinceCreated
 * @property {string} id
 * @property {boolean} [isBooster]
 * @property {boolean} isCohost
 * @property {boolean} isEmployee
 * @property {boolean} [isHost]
 * @property {boolean} isModerator
 * @property {boolean} isNewUser
 * @property {boolean} isNominatedModerator
 * @property {boolean} isTopBuyer
 * @property {JumbotronType} [jumbotronType]
 * @property {LoyaltyTier} loyaltyTierForSeller
 * @property {boolean} loyaltyVisibilityStatusEnabled
 * @property {Image} [profileImage]
 * @property {string} username
 */

/**
 * @typedef {Record<string, PresenceDiffPayloadInner>} PresenceStatePayload
 */

/**
 * @typedef {WhatnotMeta & {
 *   action: "start" | "end" | "sold" | "bid",
 *   status?: "winning" | "won" | "sold" | "",
 *   statusText?: string,
 *   bidder?: string,
 *   successful?: boolean,
 *   reason?: "overtaken_by_max_bid" | "bid_lower_than_current_price" | "increment_not_met" | string,
 *   overtakenBy?: string,
 *   price?: number,
 *   currency?: string,
 *   priceText?: string,
 *   title: string
 * }} WhatnotAuctionEventMeta
 */

/**
 * @typedef {WhatnotMeta & {
 *   action: "pin" | "unpin" | "create" | "delete",
 *   productId: string,
 *   title: string,
 *   price?: number,
 *   currency?: string,
 *   priceText?: string,
 *   product?: Product
 * }} WhatnotCommerceEventMeta
 */

//#endregion