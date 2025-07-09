import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 px-4 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Zap" className="text-blue-600" size={28} />
            <span className="text-xl font-bold text-gray-900">AutoHH</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#mission"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Миссия
            </a>
            <a
              href="#how-it-works"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Как работает
            </a>
            <a
              href="#pricing"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Тарифы
            </a>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-700">Начать</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200 animate-fade-in">
                Автоматизация поиска работы
              </Badge>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight animate-scale-in">
                Автоматические отклики на
                <span className="text-blue-600 block">вакансии hh.ru</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 animate-fade-in">
                Экономьте время на поиске работы. Наш сервис автоматически
                откликается на подходящие вакансии, пока вы занимаетесь другими
                делами.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 px-8 hover:scale-105 transition-all duration-200"
                >
                  <Icon name="Play" className="mr-2" size={20} />
                  Попробовать бесплатно
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-300 px-8 hover:scale-105 transition-all duration-200"
                >
                  <Icon name="Info" className="mr-2" size={20} />
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="animate-fade-in">
              <img
                src="/img/fe95c90c-fa27-428a-9030-b9ee3b2c76ab.jpg"
                alt="Автоматизация поиска работы"
                className="w-full h-auto rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                5,000+
              </div>
              <div className="text-gray-600">Обработано откликов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Успешных откликов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Работает круглосуточно</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="px-4 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Наша миссия
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы создаем инструменты, которые освобождают время людей от
              рутинных задач поиска работы
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Почему мы это делаем?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Clock" className="text-blue-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Экономия времени
                    </h4>
                    <p className="text-gray-600">
                      Поиск работы занимает часы каждый день. Мы автоматизируем
                      этот процесс.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon
                    name="Target"
                    className="text-blue-600 mt-1"
                    size={20}
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">Точность</h4>
                    <p className="text-gray-600">
                      Система откликается только на вакансии, соответствующие
                      вашим критериям.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icon
                    name="TrendingUp"
                    className="text-blue-600 mt-1"
                    size={20}
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">Результат</h4>
                    <p className="text-gray-600">
                      Увеличиваем количество откликов и шансы найти подходящую
                      работу.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <img
                src="/img/c13ceea8-222c-478e-bf04-a27d57724fa3.jpg"
                alt="Профессиональный поиск работы"
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              <div className="text-center">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Для кого мы работаем
                </h4>
                <p className="text-gray-600">
                  Для всех, кто ищет работу и хочет автоматизировать процесс
                  отклика на вакансии
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="px-4 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Как это работает
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Простой процесс настройки за 3 шага
            </p>
            <div className="max-w-2xl mx-auto">
              <img
                src="/img/96248f70-d879-41ba-affb-c90dc7233d58.jpg"
                alt="Процесс автоматизации"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6 border-0 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Settings" className="text-blue-600" size={32} />
                </div>
                <CardTitle className="text-xl">1. Настройка</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Укажите критерии поиска: должность, зарплата, местоположение и
                  другие параметры
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Bot" className="text-blue-600" size={32} />
                </div>
                <CardTitle className="text-xl">2. Автоматизация</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Система автоматически ищет подходящие вакансии и отправляет
                  отклики от вашего имени
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name="CheckCircle"
                    className="text-blue-600"
                    size={32}
                  />
                </div>
                <CardTitle className="text-xl">3. Результат</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Получайте уведомления о откликах и приглашениях на
                  собеседования
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="px-4 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Тарифы</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Выберите подходящий план для ваших потребностей
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">Базовый</CardTitle>
                <CardDescription>Для начинающих</CardDescription>
                <div className="text-3xl font-bold text-gray-900 mt-4">
                  ₽990<span className="text-lg text-gray-500">/мес</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-green-600" size={16} />
                    До 50 откликов в день
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-green-600" size={16} />
                    Базовые фильтры
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-green-600" size={16} />
                    Email уведомления
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline">
                  Выбрать план
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6 border-2 border-blue-600 shadow-lg relative">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600">
                Популярный
              </Badge>
              <CardHeader>
                <CardTitle className="text-xl">Профессиональный</CardTitle>
                <CardDescription>Для активного поиска</CardDescription>
                <div className="text-3xl font-bold text-gray-900 mt-4">
                  ₽1,990<span className="text-lg text-gray-500">/мес</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-green-600" size={16} />
                    До 150 откликов в день
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-green-600" size={16} />
                    Расширенные фильтры
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-green-600" size={16} />
                    Приоритетная поддержка
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-green-600" size={16} />
                    Аналитика и отчеты
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
                  Выбрать план
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6 border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">Премиум</CardTitle>
                <CardDescription>Для рекрутеров</CardDescription>
                <div className="text-3xl font-bold text-gray-900 mt-4">
                  ₽4,990<span className="text-lg text-gray-500">/мес</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-green-600" size={16} />
                    Безлимитные отклики
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-green-600" size={16} />
                    Все возможности
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-green-600" size={16} />
                    Персональный менеджер
                  </li>
                  <li className="flex items-center gap-2">
                    <Icon name="Check" className="text-green-600" size={16} />
                    API доступ
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline">
                  Выбрать план
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Zap" className="text-blue-400" size={24} />
                <span className="text-xl font-bold text-white">AutoHH</span>
              </div>
              <p className="text-gray-400">
                Автоматизация поиска работы на hh.ru
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Продукт</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Возможности
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Тарифы
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Документация
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Помощь
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Блог
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Вакансии
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 AutoHH. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
