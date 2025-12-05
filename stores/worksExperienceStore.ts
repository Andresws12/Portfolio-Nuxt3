import { useI18n } from "vue-i18n"; // Assuming you're using useI18n
import { workImageHeight } from "@/models/ImagesHeight";

export const useWorksExperienceStore = defineStore(
  "worksExperienceStore",
  () => {
    const { t } = useI18n();

    const workArgs = ref([
      {
        id: "iskaypet",
        imageSource: "img/iskaypet.webp",
        imageData: t("common.images.dataIskaypetImage"),
        imageHeight: workImageHeight.ISKAYPET,
        textTitle: t("common.works.iskaypet.name"),
        textSubtitle: t("common.works.iskaypet.title"),
        callToActionButton: t(
          "views.home.homeWorkExperience.callToActionButton",
        ),
        activeTextButton: t("views.home.homeWorkExperience.activeButtonText"),
        isActive: true,
        hasVue: true,
        hasReact: true,
        hasTypescript: true,
        hasJquery: true,
        dateStart: "2021-11-01T00:00:00",
        dateEnd: "now",
        path: "/works/iskaypet-view",
      },
      {
        id: "cloudappi",
        imageSource: "img/cloudappi.webp",
        imageData: t("common.images.dataCloudappiImage"),
        imageHeight: workImageHeight.CLOUDAPPI,
        textTitle: t("common.works.cloudappi.name"),
        textSubtitle: t("common.works.cloudappi.title"),
        callToActionButton: t(
          "views.home.homeWorkExperience.callToActionButton",
        ),
        hasVue: true,
        hasReact: true,
        hasAngular: true,
        hasTypescript: true,
        hasJquery: true,
        hasNet: true,
        dateStart: "2021-03-01T00:00:00",
        dateEnd: "2021-11-01T00:00:00",
        path: "/works/cloudappi-view",
      },
      {
        id: "star",
        imageSource: "img/star.webp",
        imageData: t("common.images.dataStarImage"),
        imageHeight: workImageHeight.STAR,
        textTitle: t("common.works.star.name"),
        textSubtitle: t("common.works.star.title"),
        callToActionButton: t(
          "views.home.homeWorkExperience.callToActionButton",
        ),
        hasVue: true,
        hasTypescript: true,
        hasNet: true,
        hasJquery: true,
        dateStart: "2019-02-01T00:00:00",
        dateEnd: "2021-02-01T00:00:00",
        path: "/works/star-view",
      },
      {
        id: "pantallazo",
        imageSource: "img/pantallazo.webp",
        imageData: t("common.images.dataPantallazoImage"),
        imageHeight: workImageHeight.PANTALLAZO,
        textTitle: t("common.works.pantallazo.name"),
        textSubtitle: t("common.works.pantallazo.title"),
        callToActionButton: t(
          "views.home.homeWorkExperience.callToActionButton",
        ),
        hasTypescript: true,
        hasPhp: true,
        hasJquery: true,
        dateStart: "2018-08-01T00:00:00",
        dateEnd: "2019-02-01T00:00:00",
        path: "/works/pantallazo-view",
      },
    ]);

    return { workArgs };
  },
);
