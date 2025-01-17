import usePlatforms from "./usePlatforms";

class Platform {

  static getPlatform = <Platform>(id?: number) => {
    const { data: platforms } = usePlatforms();
    return platforms?.results.find(p => p.id === id);
  }
  
}

export default Platform;

