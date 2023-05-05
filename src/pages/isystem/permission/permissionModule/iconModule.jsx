import React, { useState, forwardRef, useImperativeHandle } from 'react';
import { Button, Modal, Tabs } from 'antd';
import Icon, {
    StepBackwardOutlined, StepForwardOutlined, FastBackwardOutlined, FastForwardOutlined, ShrinkOutlined, ArrowsAltOutlined, DownOutlined, UpOutlined, LeftOutlined, RightOutlined, CaretUpOutlined, CaretDownOutlined, CaretLeftOutlined, CaretRightOutlined, UpCircleOutlined, DownCircleOutlined, LeftCircleOutlined, RightCircleOutlined, DoubleRightOutlined, DoubleLeftOutlined, VerticalLeftOutlined, VerticalRightOutlined, VerticalAlignTopOutlined, VerticalAlignMiddleOutlined, VerticalAlignBottomOutlined, ForwardOutlined, BackwardOutlined, RollbackOutlined, EnterOutlined, RetweetOutlined, SwapOutlined, SwapLeftOutlined, SwapRightOutlined, ArrowUpOutlined, ArrowDownOutlined, ArrowLeftOutlined, ArrowRightOutlined, PlayCircleOutlined, UpSquareOutlined, DownSquareOutlined, LeftSquareOutlined, RightSquareOutlined, LoginOutlined, LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined, BorderBottomOutlined, BorderHorizontalOutlined, BorderInnerOutlined, BorderOuterOutlined, BorderLeftOutlined, BorderRightOutlined, BorderTopOutlined, BorderVerticleOutlined, PicCenterOutlined, PicLeftOutlined, PicRightOutlined, RadiusBottomleftOutlined, RadiusBottomrightOutlined, RadiusUpleftOutlined, RadiusUprightOutlined, FullscreenOutlined, FullscreenExitOutlined, QuestionOutlined, QuestionCircleOutlined, PlusOutlined, PlusCircleOutlined, PauseOutlined, PauseCircleOutlined, MinusOutlined, MinusCircleOutlined, PlusSquareOutlined, MinusSquareOutlined, InfoOutlined, InfoCircleOutlined, ExclamationOutlined, ExclamationCircleOutlined, CloseOutlined, CloseCircleOutlined, CloseSquareOutlined, CheckOutlined, CheckCircleOutlined, CheckSquareOutlined, ClockCircleOutlined, WarningOutlined, IssuesCloseOutlined, StopOutlined, EditOutlined, FormOutlined, CopyOutlined, ScissorOutlined, DeleteOutlined, SnippetsOutlined, DiffOutlined, HighlightOutlined, AlignCenterOutlined, AlignLeftOutlined, AlignRightOutlined, BgColorsOutlined, BoldOutlined, ItalicOutlined, UnderlineOutlined, StrikethroughOutlined, RedoOutlined, UndoOutlined, ZoomInOutlined, ZoomOutOutlined, FontColorsOutlined, FontSizeOutlined, LineHeightOutlined, DashOutlined, SmallDashOutlined, SortAscendingOutlined, SortDescendingOutlined, DragOutlined, OrderedListOutlined, UnorderedListOutlined, RadiusSettingOutlined, ColumnWidthOutlined, ColumnHeightOutlined, AreaChartOutlined, PieChartOutlined, BarChartOutlined, DotChartOutlined, LineChartOutlined, RadarChartOutlined, HeatMapOutlined, FallOutlined, RiseOutlined, StockOutlined, BoxPlotOutlined, FundOutlined, SlidersOutlined, AndroidOutlined, AppleOutlined, WindowsOutlined, IeOutlined, ChromeOutlined, GithubOutlined, AliwangwangOutlined, DingdingOutlined, WeiboSquareOutlined, WeiboCircleOutlined, TaobaoCircleOutlined, Html5Outlined, WeiboOutlined, TwitterOutlined, WechatOutlined, YoutubeOutlined, AlipayCircleOutlined, TaobaoOutlined, SkypeOutlined, QqOutlined, MediumWorkmarkOutlined, GitlabOutlined, MediumOutlined, LinkedinOutlined, GooglePlusOutlined, DropboxOutlined, FacebookOutlined, CodepenOutlined, CodeSandboxOutlined, AmazonOutlined, GoogleOutlined, CodepenCircleOutlined, AlipayOutlined, AntDesignOutlined, AntCloudOutlined, AliyunOutlined, ZhihuOutlined, SlackOutlined, SlackSquareOutlined, BehanceOutlined, BehanceSquareOutlined, DribbbleOutlined, DribbbleSquareOutlined, InstagramOutlined, YuqueOutlined, AlibabaOutlined, YahooOutlined, RedditOutlined, SketchOutlined, WhatsAppOutlined, DingtalkOutlined, AccountBookOutlined, AimOutlined, AlertOutlined, ApartmentOutlined, ApiOutlined, AppstoreAddOutlined, AppstoreOutlined, AudioOutlined, AudioMutedOutlined, AuditOutlined, BankOutlined, BarcodeOutlined, BarsOutlined, BellOutlined, BlockOutlined, BookOutlined, BorderOutlined, BorderlessTableOutlined, BranchesOutlined, BugOutlined, BuildOutlined, BulbOutlined, CalculatorOutlined, CalendarOutlined, CameraOutlined, CarOutlined, CarryOutOutlined, CiCircleOutlined, CiOutlined, ClearOutlined, CloudDownloadOutlined, CloudOutlined, CloudServerOutlined, CloudSyncOutlined, CloudUploadOutlined, ClusterOutlined, CodeOutlined, CoffeeOutlined, CommentOutlined, CompassOutlined, CompressOutlined, ConsoleSqlOutlined, ContactsOutlined, ContainerOutlined, ControlOutlined, CopyrightOutlined, CreditCardOutlined, CrownOutlined, CustomerServiceOutlined, DashboardOutlined, DatabaseOutlined, DeleteColumnOutlined, DeleteRowOutlined, DeliveredProcedureOutlined, DeploymentUnitOutlined, DesktopOutlined, DisconnectOutlined, DislikeOutlined, DollarCircleOutlined, DollarOutlined, DownloadOutlined, EllipsisOutlined, EnvironmentOutlined, EuroCircleOutlined, EuroOutlined, ExceptionOutlined, ExpandAltOutlined, ExpandOutlined, ExperimentOutlined, ExportOutlined, EyeOutlined, EyeInvisibleOutlined, FieldBinaryOutlined, FieldNumberOutlined, FieldStringOutlined, FieldTimeOutlined, FileAddOutlined, FileDoneOutlined, FileExcelOutlined, FileExclamationOutlined, FileOutlined, FileGifOutlined, FileImageOutlined, FileJpgOutlined, FileMarkdownOutlined, FilePdfOutlined, FilePptOutlined, FileProtectOutlined, FileSearchOutlined, FileSyncOutlined, FileTextOutlined, FileUnknownOutlined, FileWordOutlined, FileZipOutlined, FilterOutlined, FireOutlined, FlagOutlined, FolderAddOutlined, FolderOutlined, FolderOpenOutlined, FolderViewOutlined, ForkOutlined, FormatPainterOutlined, FrownOutlined, FunctionOutlined, FundProjectionScreenOutlined, FundViewOutlined, FunnelPlotOutlined, GatewayOutlined, GifOutlined, GiftOutlined, GlobalOutlined, GoldOutlined, GroupOutlined, HddOutlined, HeartOutlined, HistoryOutlined, HolderOutlined, HomeOutlined, HourglassOutlined, IdcardOutlined, ImportOutlined, InboxOutlined, InsertRowAboveOutlined, InsertRowBelowOutlined, InsertRowLeftOutlined, InsertRowRightOutlined, InsuranceOutlined, InteractionOutlined, KeyOutlined, LaptopOutlined, LayoutOutlined, LikeOutlined, LineOutlined, LinkOutlined, Loading3QuartersOutlined, LoadingOutlined, LockOutlined, MacCommandOutlined, MailOutlined, ManOutlined, MedicineBoxOutlined, MehOutlined, MenuOutlined, MergeCellsOutlined, MessageOutlined, MobileOutlined, MoneyCollectOutlined, MonitorOutlined, MoreOutlined, NodeCollapseOutlined, NodeExpandOutlined, NodeIndexOutlined, NotificationOutlined, NumberOutlined, OneToOneOutlined, PaperClipOutlined, PartitionOutlined, PayCircleOutlined, PercentageOutlined, PhoneOutlined, PictureOutlined, PlaySquareOutlined, PoundCircleOutlined, PoundOutlined, PoweroffOutlined, PrinterOutlined, ProfileOutlined, ProjectOutlined, PropertySafetyOutlined, PullRequestOutlined, PushpinOutlined, QrcodeOutlined, ReadOutlined, ReconciliationOutlined, RedEnvelopeOutlined, ReloadOutlined, RestOutlined, RobotOutlined, RocketOutlined, RotateLeftOutlined, RotateRightOutlined, SafetyCertificateOutlined, SafetyOutlined, SaveOutlined, ScanOutlined, ScheduleOutlined, SearchOutlined, SecurityScanOutlined, SelectOutlined, SendOutlined, SettingOutlined, ShakeOutlined, ShareAltOutlined, ShopOutlined, ShoppingCartOutlined, ShoppingOutlined, SisternodeOutlined, SkinOutlined, SmileOutlined, SolutionOutlined, SoundOutlined, SplitCellsOutlined, StarOutlined, SubnodeOutlined, SwitcherOutlined, SyncOutlined, TableOutlined, TabletOutlined, TagOutlined, TagsOutlined, TeamOutlined, ThunderboltOutlined, ToTopOutlined, ToolOutlined, TrademarkCircleOutlined, TrademarkOutlined, TransactionOutlined, TranslationOutlined, TrophyOutlined, UngroupOutlined, UnlockOutlined, UploadOutlined, UsbOutlined, UserAddOutlined, UserDeleteOutlined, UserOutlined, UserSwitchOutlined, UsergroupAddOutlined, UsergroupDeleteOutlined, VerifiedOutlined, VideoCameraAddOutlined, VideoCameraOutlined, WalletOutlined, WifiOutlined, WomanOutlined
} from '@ant-design/icons';
import "./iconModule.less";

const IconModule = forwardRef((props, ref) => {

    // 方向性图标
    const directionIcons = [StepBackwardOutlined, StepForwardOutlined, FastBackwardOutlined, FastForwardOutlined, ShrinkOutlined, ArrowsAltOutlined, DownOutlined, UpOutlined, LeftOutlined, RightOutlined, CaretUpOutlined, CaretDownOutlined, CaretLeftOutlined, CaretRightOutlined, UpCircleOutlined, DownCircleOutlined, LeftCircleOutlined, RightCircleOutlined, DoubleRightOutlined, DoubleLeftOutlined, VerticalLeftOutlined, VerticalRightOutlined, VerticalAlignTopOutlined, VerticalAlignMiddleOutlined, VerticalAlignBottomOutlined, ForwardOutlined, BackwardOutlined, RollbackOutlined, EnterOutlined, RetweetOutlined, SwapOutlined, SwapLeftOutlined, SwapRightOutlined, ArrowUpOutlined, ArrowDownOutlined, ArrowLeftOutlined, ArrowRightOutlined, PlayCircleOutlined, UpSquareOutlined, DownSquareOutlined, LeftSquareOutlined, RightSquareOutlined, LoginOutlined, LogoutOutlined, MenuFoldOutlined, MenuUnfoldOutlined, BorderBottomOutlined, BorderHorizontalOutlined, BorderInnerOutlined, BorderOuterOutlined, BorderLeftOutlined, BorderRightOutlined, BorderTopOutlined, BorderVerticleOutlined, PicCenterOutlined, PicLeftOutlined, PicRightOutlined, RadiusBottomleftOutlined, RadiusBottomrightOutlined, RadiusUpleftOutlined, RadiusUprightOutlined, FullscreenOutlined, FullscreenExitOutlined]
    // 指示性图标
    const suggestionIcons = [QuestionOutlined, QuestionCircleOutlined, PlusOutlined, PlusCircleOutlined, PauseOutlined, PauseCircleOutlined, MinusOutlined, MinusCircleOutlined, PlusSquareOutlined, MinusSquareOutlined, InfoOutlined, InfoCircleOutlined, ExclamationOutlined, ExclamationCircleOutlined, CloseOutlined, CloseCircleOutlined, CloseSquareOutlined, CheckOutlined, CheckCircleOutlined, CheckSquareOutlined, ClockCircleOutlined, WarningOutlined, IssuesCloseOutlined, StopOutlined]
    // 编辑类图标
    const editIcons = [EditOutlined, FormOutlined, CopyOutlined, ScissorOutlined, DeleteOutlined, SnippetsOutlined, DiffOutlined, HighlightOutlined, AlignCenterOutlined, AlignLeftOutlined, AlignRightOutlined, BgColorsOutlined, BoldOutlined, ItalicOutlined, UnderlineOutlined, StrikethroughOutlined, RedoOutlined, UndoOutlined, ZoomInOutlined, ZoomOutOutlined, FontColorsOutlined, FontSizeOutlined, LineHeightOutlined, DashOutlined, SmallDashOutlined, SortAscendingOutlined, SortDescendingOutlined, DragOutlined, OrderedListOutlined, UnorderedListOutlined, RadiusSettingOutlined, ColumnWidthOutlined, ColumnHeightOutlined]
    // 数据类图标
    const dataIcons = [AreaChartOutlined, PieChartOutlined, BarChartOutlined, DotChartOutlined, LineChartOutlined, RadarChartOutlined, HeatMapOutlined, FallOutlined, RiseOutlined, StockOutlined, BoxPlotOutlined, FundOutlined, SlidersOutlined]
    // 品牌和标识图标
    const logoIcons = [AndroidOutlined, AppleOutlined, WindowsOutlined, IeOutlined, ChromeOutlined, GithubOutlined, AliwangwangOutlined, DingdingOutlined, WeiboSquareOutlined, WeiboCircleOutlined, TaobaoCircleOutlined, Html5Outlined, WeiboOutlined, TwitterOutlined, WechatOutlined, YoutubeOutlined, AlipayCircleOutlined, TaobaoOutlined, SkypeOutlined, QqOutlined, MediumWorkmarkOutlined, GitlabOutlined, MediumOutlined, LinkedinOutlined, GooglePlusOutlined, DropboxOutlined, FacebookOutlined, CodepenOutlined, CodeSandboxOutlined, AmazonOutlined, GoogleOutlined, CodepenCircleOutlined, AlipayOutlined, AntDesignOutlined, AntCloudOutlined, AliyunOutlined, ZhihuOutlined, SlackOutlined, SlackSquareOutlined, BehanceOutlined, BehanceSquareOutlined, DribbbleOutlined, DribbbleSquareOutlined, InstagramOutlined, YuqueOutlined, AlibabaOutlined, YahooOutlined, RedditOutlined, SketchOutlined, WhatsAppOutlined, DingtalkOutlined]
    // 网站通用图标
    const webIcons = [AccountBookOutlined, AimOutlined, AlertOutlined, ApartmentOutlined, ApiOutlined, AppstoreAddOutlined, AppstoreOutlined, AudioOutlined, AudioMutedOutlined, AuditOutlined, BankOutlined, BarcodeOutlined, BarsOutlined, BellOutlined, BlockOutlined, BookOutlined, BorderOutlined, BorderlessTableOutlined, BranchesOutlined, BugOutlined, BuildOutlined, BulbOutlined, CalculatorOutlined, CalendarOutlined, CameraOutlined, CarOutlined, CarryOutOutlined, CiCircleOutlined, CiOutlined, ClearOutlined, CloudDownloadOutlined, CloudOutlined, CloudServerOutlined, CloudSyncOutlined, CloudUploadOutlined, ClusterOutlined, CodeOutlined, CoffeeOutlined, CommentOutlined, CompassOutlined, CompressOutlined, ConsoleSqlOutlined, ContactsOutlined, ContainerOutlined, ControlOutlined, CopyrightOutlined, CreditCardOutlined, CrownOutlined, CustomerServiceOutlined, DashboardOutlined, DatabaseOutlined, DeleteColumnOutlined, DeleteRowOutlined, DeliveredProcedureOutlined, DeploymentUnitOutlined, DesktopOutlined, DisconnectOutlined, DislikeOutlined, DollarCircleOutlined, DollarOutlined, DownloadOutlined, EllipsisOutlined, EnvironmentOutlined, EuroCircleOutlined, EuroOutlined, ExceptionOutlined, ExpandAltOutlined, ExpandOutlined, ExperimentOutlined, ExportOutlined, EyeOutlined, EyeInvisibleOutlined, FieldBinaryOutlined, FieldNumberOutlined, FieldStringOutlined, FieldTimeOutlined, FileAddOutlined, FileDoneOutlined, FileExcelOutlined, FileExclamationOutlined, FileOutlined, FileGifOutlined, FileImageOutlined, FileJpgOutlined, FileMarkdownOutlined, FilePdfOutlined, FilePptOutlined, FileProtectOutlined, FileSearchOutlined, FileSyncOutlined, FileTextOutlined, FileUnknownOutlined, FileWordOutlined, FileZipOutlined, FilterOutlined, FireOutlined, FlagOutlined, FolderAddOutlined, FolderOutlined, FolderOpenOutlined, FolderViewOutlined, ForkOutlined, FormatPainterOutlined, FrownOutlined, FunctionOutlined, FundProjectionScreenOutlined, FundViewOutlined, FunnelPlotOutlined, GatewayOutlined, GifOutlined, GiftOutlined, GlobalOutlined, GoldOutlined, GroupOutlined, HddOutlined, HeartOutlined, HistoryOutlined, HolderOutlined, HomeOutlined, HourglassOutlined, IdcardOutlined, ImportOutlined, InboxOutlined, InsertRowAboveOutlined, InsertRowBelowOutlined, InsertRowLeftOutlined, InsertRowRightOutlined, InsuranceOutlined, InteractionOutlined, KeyOutlined, LaptopOutlined, LayoutOutlined, LikeOutlined, LineOutlined, LinkOutlined, Loading3QuartersOutlined, LoadingOutlined, LockOutlined, MacCommandOutlined, MailOutlined, ManOutlined, MedicineBoxOutlined, MehOutlined, MenuOutlined, MergeCellsOutlined, MessageOutlined, MobileOutlined, MoneyCollectOutlined, MonitorOutlined, MoreOutlined, NodeCollapseOutlined, NodeExpandOutlined, NodeIndexOutlined, NotificationOutlined, NumberOutlined, OneToOneOutlined, PaperClipOutlined, PartitionOutlined, PayCircleOutlined, PercentageOutlined, PhoneOutlined, PictureOutlined, PlaySquareOutlined, PoundCircleOutlined, PoundOutlined, PoweroffOutlined, PrinterOutlined, ProfileOutlined, ProjectOutlined, PropertySafetyOutlined, PullRequestOutlined, PushpinOutlined, QrcodeOutlined, ReadOutlined, ReconciliationOutlined, RedEnvelopeOutlined, ReloadOutlined, RestOutlined, RobotOutlined, RocketOutlined, RotateLeftOutlined, RotateRightOutlined, SafetyCertificateOutlined, SafetyOutlined, SaveOutlined, ScanOutlined, ScheduleOutlined, SearchOutlined, SecurityScanOutlined, SelectOutlined, SendOutlined, SettingOutlined, ShakeOutlined, ShareAltOutlined, ShopOutlined, ShoppingCartOutlined, ShoppingOutlined, SisternodeOutlined, SkinOutlined, SmileOutlined, SolutionOutlined, SoundOutlined, SplitCellsOutlined, StarOutlined, SubnodeOutlined, SwitcherOutlined, SyncOutlined, TableOutlined, TabletOutlined, TagOutlined, TagsOutlined, TeamOutlined, ThunderboltOutlined, ToTopOutlined, ToolOutlined, TrademarkCircleOutlined, TrademarkOutlined, TransactionOutlined, TranslationOutlined, TrophyOutlined, UngroupOutlined, UnlockOutlined, UploadOutlined, UsbOutlined, UserAddOutlined, UserDeleteOutlined, UserOutlined, UserSwitchOutlined, UsergroupAddOutlined, UsergroupDeleteOutlined, VerifiedOutlined, VideoCameraAddOutlined, VideoCameraOutlined, WalletOutlined, WifiOutlined, WomanOutlined]

    const [isModalOpen, setIsModalOpen] = useState(false);
    //将子组件的方法 暴露给父组件
    useImperativeHandle(ref, () => ({
        setIsModalOpen
    }))
    const chooseIcon = (item) => {
        let iconName = item.render.displayName
        props.setIcon(iconName)
        setIsModalOpen(false);
    }
    return (
        <>
            <div>
                <Modal title="菜单图标" footer={null} open={isModalOpen} onCancel={() => setIsModalOpen(false)} cancelText="取消" width="50%">
                    <Tabs className='iconDIV' defaultActiveKey="1" items={[
                        {
                            label: '方向性图标', key: '1', children: (
                                <ul>
                                    {directionIcons.map((item, index) => {
                                        return (
                                            <li key={index} onClick={() => chooseIcon(item)}>
                                                <Icon component={item} />
                                            </li>
                                        )
                                    })}
                                </ul>
                            )
                        },
                        {
                            label: '指示性图标', key: '2', children: (
                                <ul>
                                    {suggestionIcons.map((item, index) => {
                                        return (
                                            <li key={index} onClick={() => chooseIcon(item)}>
                                                <Icon component={item} />
                                            </li>
                                        )
                                    })}
                                </ul>
                            )
                        },
                        {
                            label: '编辑类图标', key: '3', children: (
                                <ul>
                                    {editIcons.map((item, index) => {
                                        return (
                                            <li key={index} onClick={() => chooseIcon(item)}>
                                                <Icon component={item} />
                                            </li>
                                        )
                                    })}
                                </ul>
                            )
                        },
                        {
                            label: '数据类图标', key: '4', children: (
                                <ul>
                                    {dataIcons.map((item, index) => {
                                        return (
                                            <li key={index} onClick={() => chooseIcon(item)}>
                                                <Icon component={item} />
                                            </li>
                                        )
                                    })}
                                </ul>
                            )
                        },
                        {
                            label: '网站通用图标', key: '5', children: (
                                <ul>
                                    {webIcons.map((item, index) => {
                                        return (
                                            <li key={index} onClick={() => chooseIcon(item)}>
                                                <Icon component={item} />
                                            </li>
                                        )
                                    })}
                                </ul>
                            )
                        },
                        {
                            label: '品牌和标识图标', key: '6', children: (
                                <ul>
                                    {logoIcons.map((item, index) => {
                                        return (
                                            <li key={index} onClick={() => chooseIcon(item)}>
                                                <Icon component={item} />
                                            </li>
                                        )
                                    })}
                                </ul>
                            )
                        },
                    ]} />
                </Modal>
            </div>
        </>
    )
})

export default IconModule