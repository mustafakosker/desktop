import { ConfigurationKind } from "./configurationKind";
import { IApplicationSpecification } from "./iApplicationSpecification";
import { IApplicationStatus } from "./iApplicationStatus";
import { IExternalSpecification } from "./iExternalSpecification";
import { IExternalStatus } from "./iExternalStatus";
import { IMetadata } from "./iMetadata";
import { IServiceSpecification } from "./iServiceSpecification";
import { IServiceStatus } from "./iServiceStatus";
import { ISessionSpecification } from "./iSessionSpecification";
import { IStorageSpecification } from "./iStorageSpecification";
import { IStorageStatus } from "./iStorageStatus";
import { ITraySpecification } from "./iTraySpecification";
import { ITrayStatus } from "./iTrayStatus";
import { IUpdatePolicySpecification } from "./iUpdatePolicySpecification";
import { IApplicationSecurityPolicySpecification } from "./iApplicationSecurityPolicySpecification";

type Spec =
    | IApplicationSpecification
    | IApplicationSecurityPolicySpecification
    | IExternalSpecification
    | IServiceSpecification
    | ISessionSpecification
    | IStorageSpecification
    | ITraySpecification
    | IUpdatePolicySpecification;

type Status = IApplicationStatus | IExternalStatus | IServiceStatus | IStorageStatus | ITrayStatus;

export interface IConfiguration {
    readonly apiVersion?: string;
    readonly kind: ConfigurationKind;
    readonly metadata: IMetadata;
    readonly spec: Spec;
    readonly status?: Status;
}
