import { useState, type ComponentType, type ReactNode } from "react";
import type { Job } from "../../assets/types/job";
import { Card } from "../../assets/components/ui/card";
import { Button } from "../../assets/components/ui/button";
import { Badge } from "../../assets/components/ui/badge";
import { IconText } from "../../assets/components/ui/icon-text";
import { Briefcase, DollarSign, ExternalLink, FileText, Globe, GraduationCap, MapPin, TrendingUp } from "lucide-react";
import { List } from "../../assets/components/ui/list";
import { takeFirst } from "../../assets/utils/array";
import { UI } from "../../assets/config/ui";
import { Divider } from "../../assets/components/ui/divider";

// EXTEND BUTTON TO SUPPORT LINKS
declare module "../../assets/components/ui/button" {
    interface ButtonProps {
        as?: "button" | "a";
        href?: string;
        target?: string;
        rel?: string;
    }
}

// MAIN JOB CARD
interface JobCardProps {
    job: Job;
    index: number;
}

// CARD HEADER
interface CardHeaderProps {
    job: Job;
    index: number;
}

// DETAIL SECTION (Reusable)
interface DetailSectionProps {
    title: string;
    icon: ComponentType<{ size?: number; className?: string }>;
    iconColor: string;
    children: ReactNode;
}

// CARD HEADER COMPONENT
function CardHeader({ job, index }: CardHeaderProps) {
    return (
        <div className="bg-linear-to-r from-blue-600 to-purple-600 p-6 text-white rounded-t-lg">
            <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-lg overflow-hidden bg-white flex items-center justify-center shrink-0">
                    <img
                        src={job.logoUrl}
                        alt={`${job.company} logo`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.currentTarget.src = "/api/placeholder/64/64";
                        }}
                    />
                </div>
                <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold mb-1 line-clamp-2">{job.role}</h3>
                    <p className="text-blue-100 font-medium">{job.company}</p>
                </div>
                <Badge color="gray" className="bg-white/20 shrink-0">
                    #{index + 1}
                </Badge>
            </div>
        </div>
    )
}

// QUICK INFO GRID
function QuickInfo({ job }: { job: Job }) {
    return (
        <div className="grid grid-cols-2 gap-4 text-sm">
            <IconText icon={MapPin} text={job.location} iconColor="text-blue-500" />
            <IconText icon={Briefcase} text={job.status} iconColor="text-orange-500" />
            <IconText icon={TrendingUp} text={job.experience} iconColor="text-purple-500" />
            <IconText icon={DollarSign} text={job.salary} iconColor="text-green-600" />
        </div>
    )
}

// DETAILED INFO
function DetailedInfo({ job }: { job: Job }) {
    return (
        <div className="grid lg:grid-cols-[1fr_auto] gap-8">
            <div className="space-y-6">
                <DetailSection
                    title="Pendidikan Minimum"
                    icon={GraduationCap}
                    iconColor="text-blue-600"
                >
                    <p className="text-gray-700">{job.education}</p>
                </DetailSection>
                <DetailSection
                    title="Keterampilan Teknis (Hard Skills)"
                    icon={FileText}
                    iconColor="text-green-600"
                >
                    <List
                        items={takeFirst(job.hardSkills, UI.MAX_HARD_SKILLS)}
                        icon="check"
                    />
                    {job.hardSkills.length > UI.MAX_HARD_SKILLS && (
                        <p className="text-sm text-gray-500 mt-2">
                            +{job.hardSkills.length - UI.MAX_HARD_SKILLS} skill lainnya
                        </p>
                    )}
                </DetailSection>
                <DetailSection
                    title="Keterampilan Non-Teknis (Soft Skills)"
                    icon={TrendingUp}
                    iconColor="text-purple-600"
                >
                    <List
                        items={takeFirst(job.softSkills, UI.MAX_SOFT_SKILLS)}
                        icon="check"
                    />
                    {job.softSkills.length > UI.MAX_SOFT_SKILLS && (
                        <p className="text-sm text-gray-500 mt-2">
                            +{job.softSkills.length - UI.MAX_SOFT_SKILLS} skill lainnya
                        </p>
                    )}
                </DetailSection>
                <DetailSection
                    title="Sertifikasi"
                    icon={FileText}
                    iconColor="text-orange-600"
                >
                    <p className="text-gray-700">{job.certification}</p>
                </DetailSection>
            </div>
            <ActionPanel job={job} />
        </div>
    )
}

// DETAIL SECTION COMPONENT
function DetailSection({ title, icon: Icon, iconColor, children }: DetailSectionProps) {
    return (
        <div className="border-t border-gray-200 pt-4 first:border-t-0 first:pt-0">
            <div className="flex items-center gap-2 mb-3">
                <Icon size={20} className={iconColor} />
                <h4 className="font-bold text-gray-800">{title}</h4>
            </div>
            <div className="ml-7">{children}</div>
        </div>
    );
}

// ACTION PANEL (QR & Links)
function ActionPanel({ job }: { job: Job }) {
    return (
        <div className="lg:w-72 shrink-0">
            <div className="sticky top-4 space-y-4">
                <div className="flex items-center gap-2 font-bold text-gray-800 pb-4 border-b">
                    <Globe className="w-5 h-5 text-blue-600" />
                    <span>Kunjungi Sumber</span>
                </div>
                <div className="flex justify-center">
                    <div className="w-full max-w-xs aspect-square rounded-lg overflow-hidden ring-2 ring-gray-200">
                        <img
                            src={job.qrUrl}
                            alt={`${job.company} QR`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.currentTarget.src = "/api/placeholder/200/200";
                            }}
                        />
                    </div>
                </div>
                <div className="space-y-3">
                    <Button
                        as="a"
                        href={job.siteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        icon={Globe}
                        fullWidth
                    >
                        {job.source}
                    </Button>
                    <div className="grid grid-cols-2 gap-3">
                        <Button
                            as="a"
                            href={job.siteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            icon={FileText}
                            variant="outline"
                            size="sm"
                        >
                            Detail
                        </Button>
                        <Button
                            as="a"
                            href={job.siteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            icon={ExternalLink}
                            variant="outline"
                            size="sm"
                        >
                            Situs
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

// MAIN JOB CARD COMPONENT
export function JobCard({ job, index }: JobCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <Card padding="none" hoverable>
            <CardHeader job={job} index={index} />
            <div className="p-6">
                <QuickInfo job={job} />
                <Button
                    onClick={() => setIsExpanded(!isExpanded)}
                    fullWidth
                    className="mt-4"
                >
                    {isExpanded ? "Sembunyikan Detail" : "Lihat Detail Lengkap"}
                </Button>
                {isExpanded && (
                    <div className="mt-6 space-y-6 animate-fadeIn">
                        <Divider />
                        <DetailedInfo job={job} />
                    </div>
                )}
            </div>
        </Card>
    )
}